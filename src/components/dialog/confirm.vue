<template>
    <div class="js_dialog">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title" v-html="tit"></strong></div>
            <div class="weui-dialog__bd" v-html="content"></div>
            <template v-if="typeof btns == 'function' || typeof btns == 'undefined'">
              <div class="weui-dialog__ft">
                  <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click.stop="closeAlert(true)">确认</a>
                  <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary"  @click.stop="closeAlert(false)">取消</a>
              </div>
            </template>
            <template v-else>
                <div class="weui-dialog__ft">
                  <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default"
                  v-for="item in btns"
                  :class="item.color==true?'weui-dialog__btn_primary':'weui-dialog__btn_default'"
                  :style="{color: item.color}"
                  @click.stop="closeAlert(item.state, item.callback)"
                  >{{item.txt}}</a>
                </div>
            </template>

        </div>
    </div>
</template>
<script>
export default {
  props: {
      tit: String,
      content: String,
      btns:{
        
      }
  },
  methods:{

    closeAlert : function (status,cb) {

        const el = this.$el;

        el.parentNode && el.parentNode.removeChild(el);

        window.removeEventListener("hashchange", this.hashChange);
        
        if(typeof this.btns === 'function')

          this.btns(status,this)
        else

          typeof cb === 'function' && cb(status,this)

    },
  }
}
</script>

<style lang="less">

  @import "../../../static/style/widget/weui-tips/weui-dialog";
  @import "../../../static/style/widget/weui-tips/weui-mask";

</style>


