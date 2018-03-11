<template>
 <div class="weui-slider-box">
     <div class="weui-slider">
         <div ref="sliderInner" class="weui-slider__inner">
             <div ref="sliderTrack" :style="{width:value+'%'}" class="weui-slider__track"></div>
             <div id="sliderHandler" @touchstart="sliderstart" @touchmove="slidermove" :style="{left:value+'%'}" class="weui-slider__handler"></div>
         </div>
     </div>
 </div>
</template>
<script>
export default {
  name: 'wx-slider',
  data:()=>{return {startLeft:0,startX:0,totalLen:0}},
  props: {
      value:{
        type:Number,
        default:0
      },
      maxvalue:{
        type:Number,
        default:100
      },
      minvalue:{
        type:Number,
        default:0
      },
      disabled:{
        type:String,
        default:"true"
      }
      
  },

  methods:{
        sliderstart:function (e) {
            if(this.disabled!='true')return;
            this.totalLen = this.$refs.sliderInner.offsetWidth;
            this.startLeft = parseInt(e.currentTarget.style.left) * this.totalLen / 100;
            this.startX = e.changedTouches[0].clientX;
        },
        slidermove:function(e){

            if(this.disabled!='true')return;

            var dist = this.startLeft + e.changedTouches[0].clientX - this.startX,
                percent;

            dist = dist < 0 ? 0 : dist > this.totalLen ? this.totalLen : dist;
            percent =  parseInt(dist / this.totalLen * 100);

            if(percent<this.minvalue)
              percent=this.minvalue
            else if(percent>this.maxvalue)
              percent=this.maxvalue

            this.$refs.sliderTrack.style.width = percent + '%';
            e.currentTarget.style.left = percent + '%';

            this.$emit('update:value', percent)
            
            e.preventDefault();

        }
  }


}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-slider/weui-slider";
</style>