<template>
  <router-link class="weui-cell" :to="href" v-if="type == 'router' ">
    <div class="weui-cell__hd" v-if="checkIcon">
        <slot name="icon"></slot>
    </div>
    <div class="weui-cell__bd" >
        <p><slot></slot></p>
    </div>
    <div class="weui-cell__ft" v-if="checkTips"><slot name="tips"></slot></div>
  </router-link>

  <a class="weui-cell" :href="href" v-else-if="type == 'a' ">
    <div class="weui-cell__hd" v-if="checkIcon">
        <slot name="icon"></slot>
    </div>
    <div class="weui-cell__bd" >
        <p><slot></slot></p>
    </div>
    <div class="weui-cell__ft" v-if="checkTips"><slot name="tips"></slot></div>
  </a>

  <div class="weui-cell" :class="classes" v-else-if="type == 'div' ">
    <div class="weui-cell__hd" v-if="checkIcon">
        <slot name="icon"></slot>
    </div>
    <div class="weui-cell__bd" >
        <p><slot></slot></p>
    </div>
    <div class="weui-cell__ft" v-if="checkTips"><slot name="tips"></slot></div>
  </div>

  <div class="weui-cell weui-cell_swiped" :class="classes"  @touchstart="swipestart" @touchmove="swipemove" @touchend="swipeend"  v-else-if="type == 'del' ">
    <div class="weui-cell__bd" ref="cell">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p><slot></slot></p>
            </div>
             <div class="weui-cell__ft" v-if="checkTips"><slot name="tips"></slot></div>
        </div>
    </div>
    <div class="weui-cell__ft">
        <a class="weui-swiped-btn weui-swiped-btn_warn" href="javascript:" @click="itemDel">删除</a>
    </div>
  </div>

  <div class="weui-cell" :class="classes" v-else-if="type == 'bubble'" >
      <div class="weui-cell__hd" style="position: relative;margin-right: 10px;" v-if="checkIcon">
          <slot name="icon"></slot>
      </div>
      <div class="weui-cell__bd">
          <slot></slot>
      </div>
      <div class="weui-cell__ft" v-if="checkTips"><slot name="tips"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'wx-list',
  data:()=>{return {deltaX:0,firstTouch:{},touch:{x1:0,y1:0,x2:0,y2:0},offsetLeft:0,maxDistance:68,$curDelCard:null}},
  props: {
      delcallback:{
        type:Function,
        default: function(that,target){
          console.log(that,target)
        }
      },
      type: {
          validator (value) {
              return ['router', 'a' , 'del' ,'div', 'bubble'].indexOf(value) > -1;
          },
          default: 'div'
      },
      arrow: {
          type: Boolean,
          default: false
      },
      href: {
          type: [String]
      }
  },
  computed: {
      checkIcon() {
          return !!this.$slots.icon;
      },
      checkTips() {
          return !!this.$slots.tips;
      },
      classes() {
          return this.arrow ? 'weui-cell_access' : '';
      }
  },
  methods:{
      swipeDirection:(x1, x2, y1, y2)=> {
        return Math.abs(x1 - x2) >=
          Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
      },
      swipestart:function(e){

        //初始化其他删除
        if(this.$parent.$options.prevItem && this.$parent.$options.prevItem !=this.$refs.cell){
          this.$parent.$options.prevItem.setAttribute("style","")
        };

        if(this.$curDelCard && this.$curDelCard!=this.$refs.cell) this.$curDelCard.setAttribute("style","");

        this.firstTouch = e.touches[0];

        this.deltaX=this.firstTouch.pageX-this.offsetLeft;//需要获取transform: translateX(0px);

        this.touch.x1 = this.firstTouch.pageX;
        this.touch.y1 = this.firstTouch.pageY
      },

      swipemove:function(e){

        if (!this.touch.x1)return

        this.firstTouch =e.touches[0]

        this.touch.x2 = this.firstTouch.pageX
        this.touch.y2 = this.firstTouch.pageY

        let _tempX=this.firstTouch.pageX-this.deltaX,

            dr=this.swipeDirection(this.touch.x1, this.touch.x2, this.touch.y1, this.touch.y2);
        //if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 20 && Math.abs(touch.y1 - touch.y2) < 20)
        if (this.touch.x2 && Math.abs(this.touch.y1 - this.touch.y2) < 30)
          
          if(dr=="Left" && _tempX<-this.maxDistance)_tempX=-this.maxDistance;

          if(dr=="Right" && _tempX>0){
            this.offsetLeft=0;
            if((_tempX=this.offsetLeft+_tempX)>=0)_tempX=0;
          }

          this.$refs.cell.style.WebkitTransform="translateX("+_tempX+"px)";
          this.$refs.cell.style.Transform="translateX("+_tempX+"px)";

          return false;
      },
      swipeend:function(e){

        if (this.touch.x2 && Math.abs(this.touch.y1 - this.touch.y2) < 30){

          this.$parent.$options.prevItem=this.$curDelCard=this.$refs.cell;

          let dr=this.swipeDirection(this.touch.x1, this.touch.x2, this.touch.y1, this.touch.y2);

          if(dr=="Left"){

            this.$refs.cell.style.WebkitTransform="translateX(-"+this.maxDistance+"px)";
            this.$refs.cell.style.Transform="translateX(-"+this.maxDistance+"px)";

            this.offsetLeft=-this.maxDistance
          }else{

            this.$refs.cell.style.WebkitTransform="translateX(0px)";
            this.$refs.cell.style.Transform="translateX(0px)";
            this.offsetLeft=0;
          }
            
        }

        this.touch = {}
      },
      itemDel:function(e){

        this.delcallback(this,e);

        this.$refs.cell.parentNode.remove();
      }
  }


}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-cell_swiped";
    @import "../../../static/style/widget/weui-tips/weui-badge";
</style>