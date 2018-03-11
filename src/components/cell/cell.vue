<template>
  <label class="weui-cell weui-check__label">
      <div class="weui-cell__hd" v-if="pos=='before'">
           <slot name="input"></slot>
           <i class="weui-icon-checked"></i>
      </div>
      <div class="weui-cell__bd">
          <slot></slot>
      </div>
      <div class="weui-cell__ft" v-if="pos==undefined || pos=='after'">
        <slot name="input"></slot>
        <span class="weui-icon-checked"></span>
      </div>
  </label>
</template>

<script >
export default {
  name: 'wx-cell',
  props: {
      pos:String
  },
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-check";
</style>
