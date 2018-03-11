<template>
 <div>
 	<div class="weui-cells__title" v-html="title"></div>
 	<div class="weui-cells weui-cells_form">
 		<slot></slot>
 	</div>
 </div>
</template>
<script >
export default {
  name: 'wx-form',
  props: {
            title: String
        }
}
</script>
<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-form";
</style>