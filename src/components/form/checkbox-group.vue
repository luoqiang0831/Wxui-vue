<template>
	<div class="weui-cells weui-cells_checkbox">
        <div class="weui-cell__hd"><label class="weui-label">{{name}}</label></div>
        <div class="weui-cell__bd">
            <slot></slot>
        </div>
    </div>

</template>

<script >
export default {
  name: 'wx-checkbox-group',
  props:{
  	name:String
  }
}
</script>
<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-check";
</style>
