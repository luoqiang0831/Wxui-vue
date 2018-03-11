<template>
    <button :disabled="disabled" :style="[setStyle]" :type="actionType">
        <slot></slot>
    </button>
</template>

<script >
import { toJson } from "@/assets/method.js";
export default {
  name: 'wx-button',
  props: {
      disabled: Boolean,
      actionType: {
          validator(value) {
              return ['button', 'submit', 'reset'].indexOf(value) > -1;
          },
          default: 'button'
      },
      styles: String,
  },
  computed:{
    setStyle() {

      if (this.styles)return toJson(this.styles)

    },
  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-button/weui-button.less";
</style>
