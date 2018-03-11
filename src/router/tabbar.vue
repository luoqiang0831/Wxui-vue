<template>
   <div class="page tabbar js_show">
       <div class="page__bd" style="height: 100%;">
           <div class="weui-tab">
               <div class="weui-tab__panel">

               </div>
               <div class="weui-tabbar" ref="tabbar" v-on:click="tapItem">
                   <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                       <span style="display: inline-block;position: relative;">
                           <img src="../../static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                           <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                       </span>
                       <p class="weui-tabbar__label">微信</p>
                   </a>
                   <a href="javascript:;" class="weui-tabbar__item">
                       <img src="../../static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                       <p class="weui-tabbar__label">通讯录</p>
                   </a>
                   <a href="javascript:;" class="weui-tabbar__item">
                       <span style="display: inline-block;position: relative;">
                           <img src="../../static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                           <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                       </span>
                       <p class="weui-tabbar__label">发现</p>
                   </a>
                   <a href="javascript:;" class="weui-tabbar__item">
                       <img src="../../static/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                       <p class="weui-tabbar__label">我</p>
                   </a>
               </div>
           </div>
       </div>
   </div>
</template>
<script>
    export default{
        methods:{
          tapItem:function(evt){

            Array.prototype.slice.apply(this.$refs.tabbar.children).map((item)=>{

              item.className="weui-tabbar__item";

            })

            evt.path.find((el)=>{return el.className=="weui-tabbar__item";}).className="weui-tabbar__item weui-bar__item_on";

          }
        }
    }
</script>
<style lang="less">
    @import "../../static/style/widget/weui-tab/weui-tab";
    @import "../../static/style/widget/weui-tips/weui-badge";
</style>