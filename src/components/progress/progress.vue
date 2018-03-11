<template>
 <div class="weui-progress">
     <div class="weui-progress__bar">
         <div class="weui-progress__inner-bar js_progress" :style="{width:value+'%'}"></div>
     </div>
     <!-- <a href="javascript:;" class="weui-progress__opr">
         <i class="weui-icon-cancel"></i>
     </a> -->
 </div>
</template>
<script>
export default {
  name: 'wx-progress',
  props: {
      value:{
        type:Number,
        default:0
      }
      
  },

}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-progress/weui-progress";
</style>