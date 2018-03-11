<template>
   <div class="page navbar js_show">
       <div class="page__bd" style="height: 100%;">
           <div class="weui-tab">
               <div class="weui-navbar" @click="tapItem">
                   <div class="weui-navbar__item weui-bar__item_on">
                       选项一
                   </div>
                   <div class="weui-navbar__item">
                       选项二
                   </div>
                   <div class="weui-navbar__item">
                       选项三
                   </div>
               </div>
               <div class="weui-tab__panel">

               </div>
           </div>
       </div>
   </div>
</template>
<script>
    export default{
        data(){ return {succeed:false,fail:false} },
        methods:{
          tapItem:function(evt){

            Array.prototype.slice.apply(evt.target.parentNode.children).map((item)=>{

              item.className="weui-navbar__item"

            })

            evt.target.className="weui-navbar__item weui-bar__item_on";
            
          }
        }
    }
</script>
<style lang="less">
    // article
    @import "../../static/style/widget/weui-tab/weui-navbar";
</style>