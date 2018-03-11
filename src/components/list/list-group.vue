<template>
  <div>
    <div class="weui-cells__title">{{title}}</div>
    <div class="weui-cells">
      <slot></slot>
    </div>
  </div>
</template>
<script >
export default {
  name: 'wx-list-group',
  data:()=>{return {prevItem:null}},
  props: {
      title:String,
      type: {
          validator (value) {
              return ['del','div'].indexOf(value) > -1;
          },
          default: 'div'
      },
  },
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-cell_global";
</style>