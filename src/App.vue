<template>
  <router-view></router-view>
</template>
<script>
import "../static/css/example.css"
export default {
  name: 'app'
}
</script>
<style>
    .show{display: block !important;}
    .hide{display: none !important;}
    /*picker*/
    .weui-picker.weui-animate-slide-up{
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-animation:none;
        animation:none;
    }
</style>
<style lang="less">
    @import "../static/style/base/reset";
    @import "../static/style/icon/weui-icon_font";

    // cell
    @import "../static/style/widget/weui-cell/weui-cell_global";
    @import "../static/style/widget/weui-cell/weui-cell_swiped";
    
    @import "../static/style/widget/weui-cell/weui-access";
    // flex
    @import "../static/style/widget/weui-flex/weui-flex";

    // @import "../static/style/widget/weui-button/weui-button.less"
    // @import "../static/style/";
    
</style>
