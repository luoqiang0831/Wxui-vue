<template>
    <div class="js_dialog">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd" v-if="tit!=''"><strong class="weui-dialog__title" v-html="tit"></strong></div>
            <div class="weui-dialog__bd" v-html="content"></div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="close">确认</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
      tit: String,
      content: String,
      callback: Function
  },
  methods:{

    close : function () {

        const el = this.$el;

        el.parentNode && el.parentNode.removeChild(el);

        window.removeEventListener("hashchange", this.hashChange);

        typeof this.callback === 'function' && this.callback();
    }
  }
}
</script>

<style lang="less">

  @import "../../../static/style/widget/weui-tips/weui-dialog";
  @import "../../../static/style/widget/weui-tips/weui-mask";

</style>

