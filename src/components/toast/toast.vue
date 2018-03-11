<template>
    <div>
        <div class="weui-mask_transparent"></div>
        <div class="weui-mask" style="background:transparent;"></div>
        <div class="weui-toast">
            <i class="weui-icon_toast" :class="icon=='success'?'weui-icon-success-no-circle':icon"></i>
            <p class="weui-toast__content">{{text}}</p>
        </div>
    </div>
</template>

<script >
export default {
  name: 'wx-toast',
  props: {
      text:String,
      icon:String,
      callback:Function,
      closeTime:Number
  },
  mounted:function(){

    const timer = setTimeout(()=>{

        clearTimeout(timer);

        const el = this.$el;

        el.parentNode && el.parentNode.removeChild(el);

        this.callback&&this.callback();

    }, ~~this.closeTime||2000);

  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-tips/weui-toast.less";
    @import "../../../static/style/widget/weui-loading/weui-loading.less";
    @import "../../../static/style/widget/weui-tips/weui-mask";
</style>
