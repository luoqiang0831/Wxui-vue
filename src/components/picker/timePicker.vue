<template>
  <div>
    <wx-mask v-model="show" v-on:click.native="close"></wx-mask>
    <div class="weui-picker" :class="show ? 'weui-animate-slide-up' : ''">
        <div class="weui-picker__hd">
          <a href="javascript:;" @click="closePicker" class="weui-picker__action">取消</a>
          <a href="javascript:;" @click="tapAffirm" class="weui-picker__action">确定</a>
        </div>
        <div class="weui-picker__bd">
            <picker-item :items="year" v-on:linkage="dataLinkAge" type="year" :link.sync="month" ></picker-item>
            <picker-item :items="month" v-on:linkage="dataLinkAge" type="month":link.sync="day" ></picker-item>
            <picker-item :items="day" v-on:linkage="dataLinkAge" type="day"></picker-item>
            <!-- <picker-item 
                v-for="(item,key) in currentData" 
                :items="item" 
                v-on:linkage="dataLinkAge" 
                :index="key" 
                :key="key"
            >
            </picker-item> -->
        </div>
    </div>
  </div>
</template>
<script>
import { getDefaultIndex } from './utils.js';
import PickerItem from './pickerItem';
export default {
  name: 'wx-time-picker',
  components:{
    PickerItem
  },
  data() {
      return {
          show: this.value,
          start:2000,   // 保存开始按下的位置
          end:2030,     // 保存结束时的位置
          year:[],      // 年
          month:[],
          day:[],

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
  created:function(){

      this.timeInit();

      // 首次触发选中事件
      // 如果有缓存的选项，则用缓存的选项，否则使用中间值。
      let y=this.year[getDefaultIndex(this.year)];

      this.month=this.year[getDefaultIndex(y.children)].children;

      this.day=this.month[getDefaultIndex(this.month)].children;

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


    // typeof this.change === 'function' && this.change.call(this, this.items[_index], _index);
    // this.trans=this.translate;

  },
  methods:{
    //初始化时间
    timeInit:function(){

      var date = [];
      var daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //所有月份的天数
      for (var i = this.start; i <= this.end; i++) {
          var months = [];
          if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
              //判定为闰年
              daysTotal[1] = 29;
          } else {
              daysTotal[1] = 28;
          }

          for (var j = 0; j < 12; j++) {
              var dates = [];
              for (var k = 1; k < daysTotal[j] + 1; k++) {
                  var _date = {
                      label: k + '日',
                      value: k
                  };
                  dates.push(_date);
              }
              months.push({
                  label: j + 1 + '月',
                  value: j + 1,
                  children: dates
              });
          }

          this.year.push({
              label: i + '年',
              value: i,
              children: months
          });
      }

    },
    //关闭picker
    closePicker:function(){

      typeof this.cancel === 'function' && this.cancel(item);

      this.close();

    },
    close:function(){

      this.$emit('input', false);

    },
    //确认回调
    tapAffirm:function(){

      typeof this.confirm === 'function' && this.confirm({year:this._year,month:this._month,day:this._day});
      this.close();
    },
    //数据联动
    dataLinkAge:function(key,value){

      typeof this.change === 'function' && this.change.call(this, value);

      this["_"+key]=value;
    }
  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-picker/weui-picker";
    // animate
    @import "../../../static/style/widget/weui-animate/weui-animate";
</style>