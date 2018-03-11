<template>
  <div>
    <wx-mask v-model="show" v-on:click.native="close"></wx-mask>
    <div class="weui-picker" :class="show ? 'weui-animate-slide-up' : ''">
        <div class="weui-picker__hd">
          <a href="javascript:;" @click="closePicker" class="weui-picker__action">取消</a>
          <a href="javascript:;" @click="tapAffirm" class="weui-picker__action">确定</a>
        </div>
        <div class="weui-picker__bd">
            <div class="weui-picker__group"
                 ref="scroll_group"
                 @touchstart="scrollStart"
                 @touchmove="scrollMove"
                 @touchend="scrollEnd">
                <div class="weui-picker__mask"></div>
                <div class="weui-picker__indicator"></div>
                <div class="weui-picker__content" ref="scroll_content" :style="styles">
                    <div class="weui-picker__item" v-for="item in items" :class="[item.disabled ? 'weui-picker__item_disabled' : '']" :key="item.key">{{ item.label }}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { getMax, getDefaultTranslate, getMin , getDefaultIndex } from './utils.js';
export default {
  name: 'wx-picker',
  data() {
      return {
          show: this.value,
          offset:3 ,// 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
          rowHeight : 34,
          bodyHeight: 7 * 34, // picker的高度，用于辅助点击滚动的计算
          start:0,      // 保存开始按下的位置
          end:0,        // 保存结束时的位置
          startTime:0,  // 开始触摸的时间
          trans:0,      // 当前 translate
          translate:0,  // 缓存 translate
          points:[],    // 记录移动点
          transTime:0,  // translate 过渡时间
          windowHeight:window.innerHeight, // 屏幕的高度
      }
  },
  props: {
      items:{
        type:Array,
        default:()=>{
          return []
        }
      },
      value: {
          type: Boolean,
          default: false
      },
      cancel:Function,//取消
      change:Function,//改变
      confirm:Function,//确认
  },
  watch: {
      value(val) {
        this.show = val;
      }
  },
  computed: {
      styles() {

          const style = {

                         'transform': 'translate3d(0px, '+this.trans+'px, 0px)',
                         '-webkit-transform': 'translate3d(0px, '+this.trans+'px, 0px)',
                         '-webkit-transition': 'all ' + this.transTime + 's',
                         'transition': 'all ' + this.transTime + 's'
                         
                       };

          return style;
      }
  },
  mounted:function(){
    // 首次触发选中事件
    // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
    this.translate = getDefaultTranslate(this.offset, this.rowHeight, this.items);
    typeof this.change === 'function' && this.change.call(this, this.items[_index], _index);
    this.trans=this.translate;

  },
  methods:{
    //滚动开始
    scrollStart:function(evt){
        this.start = evt.changedTouches[0].pageY;
        this.startTime = +new Date();
    },
    //滚动
    scrollMove:function(evt){

        this.end = evt.changedTouches[0].pageY;
        var diff = this.end - this.start;
        this.transTime=0;
        this.trans=this.translate + diff;
        this.startTime = +new Date();
        this.points.push({ time: this.startTime, y: this.end });
        if (this.points.length > 40) {
            this.points.shift();
        }
        evt.preventDefault();
    },
    //滚动结束
    scrollEnd:function(evt){
        /**
         * 思路:
         * 0. touchstart 记录按下的点和时间
         * 1. touchmove 移动时记录前 40个经过的点和时间
         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
         */
        this.endTime = new Date().getTime();
        this.end = evt.changedTouches[0].pageY;
        var relativeY = this.windowHeight - this.bodyHeight / 2;

        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
        if (this.endTime - this.startTime > 100) {
            //如果end和start相差小于10，则视为
            if (Math.abs(this.end - this.start) > 10) {
                this.stop(this.end - this.start);
            } else {
                this.stop(relativeY - this.end);
            }
        } else {
            if (Math.abs(this.end - this.start) > 10) {
                var endPos = this.points.length - 1;
                var startPos = endPos;
                for (var i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
                    startPos = i;
                }

                if (startPos !== endPos) {
                    var ep = this.points[endPos];
                    var sp = this.points[startPos];
                    var t = ep.time - sp.time;
                    var s = ep.y - sp.y;
                    var v = s / t; // 出手时的速度
                    var diff = v * 150 + (this.end - this.start); // 滑行 150ms,这里直接影响“灵敏度”
                    this.stop(diff);
                } else {
                    this.stop(0);
                }
            } else {
                this.stop(relativeY - this.end);
            }
        }
    },
    
    //滚动结束计算
    stop:function (diff) {
            this.translate += diff;

            // 移动到最接近的那一行
            this.translate = Math.round(this.translate / this.rowHeight) * this.rowHeight;
            var max = getMax(this.offset, this.rowHeight);
            var min = getMin(this.offset, this.rowHeight, this.items.length);
            // 不要超过最大值或者最小值
            if (this.translate > max) {
                this.translate = max;
            }
            if (this.translate < min) {
                this.translate = min;
            }

            // 如果是 disabled 的就跳过
            var index = this.offset - this.translate / this.rowHeight;
            while (!!this.items[index] && this.items[index].disabled) {
                diff > 0 ? ++index : --index;
            }

            this.translate = (this.offset - index) * this.rowHeight;
            this.transTime=.3;
            this.trans=this.translate;
            this.curSelected=this.items[index].label;
            // 触发选择事件
            typeof this.change === 'function' && this.change.call(_this, this.curSelected , index);
    },
    
    //关闭picker
    closePicker:function(){

      typeof this.cancel === 'function' && this.cancel(this.curSelected);

      this.close();

    },
    close:function(){

      this.$emit('input', false);

    },
    //确认回调
    tapAffirm:function(){
      typeof this.confirm === 'function' && this.confirm(this.curSelected);
      this.close();
    }
  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-picker/weui-picker";
    // animate
    @import "../../../static/style/widget/weui-animate/weui-animate";
</style>