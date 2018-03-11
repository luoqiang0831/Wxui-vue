<template>
   <div class="page actionsheet js_show">
       <div class="page__hd">
           <h1 class="page__title">ActionSheet</h1>
           <p class="page__desc">弹出式菜单</p>
       </div>
       <div class="page__bd page__bd_spacing">
           <wx-button @click.native="iosDisplay = true" class="weui-btn weui-btn_primary">iOS ActionSheet</wx-button>
           <wx-button @click.native="androidDisplay = true" class="weui-btn weui-btn_primary">Android ActionSheet</wx-button>
       </div>
       <!--BEGIN actionSheet-->
       <wx-ios-sheet v-model="iosDisplay" title="ios 测试测试" :list="items"></wx-ios-sheet>

       <wx-android-sheet v-model="androidDisplay" title="androidDisplay 测试测试" :list="items"></wx-android-sheet>

       <!-- <div class="weui-skin_android" id="androidActionsheet" style="opacity: 0; display: none;">
           <div class="weui-mask"></div>
           <div class="weui-actionsheet">
               <div class="weui-actionsheet__menu">
                   <div class="weui-actionsheet__cell">示例菜单</div>
                   <div class="weui-actionsheet__cell">示例菜单</div>
                   <div class="weui-actionsheet__cell">示例菜单</div>
               </div>
           </div>
       </div> -->
   </div>
</template>
<script>
    export default {
        data() {
            return {
                iosDisplay: false,
                androidDisplay: false,
                items:[
                  {
                    text:    '菜单一',
                    callback:()=>{
                      console.log("123");
                    }
                  },
                  {
                    text:    '菜单二',
                    callback:()=>{
                      console.log("123");
                    }
                  },
                  {
                    text:    '菜单三',
                    callback:()=>{
                      console.log("123");
                    }
                  },
                  {
                    text:    '菜单四',
                    callback:()=>{
                      console.log("123");
                    }
                  },
                  {
                    text:    '菜单五',
                    callback:()=>{
                      console.log("123");
                    }
                  },
                ]
            }
        },
        methods:{
        }
    }
</script>
<style lang="less">
    // article
    @import "../../static/style/widget/weui-tips/weui-actionsheet";
</style>