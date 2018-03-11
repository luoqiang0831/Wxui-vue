<template>
   <div class="page msg js_show">
       <div class="page__hd">
           <h1 class="page__title">Msg</h1>
           <p class="page__desc">提示页</p>
       </div>
       <div class="page__bd page__bd_spacing">
         <wx-button class="weui-btn weui-btn_primary" @click.native="succeed = true">成功提示页</wx-button>
         <wx-button class="weui-btn weui-btn_primary" @click.native="fail = true">失败提示页</wx-button>
       </div>

       <div class="page msg js_show" v-if="succeed">
           <div class="page__hd">
               <h1 class="page__title">Msg</h1>
               <p class="page__desc">提示页</p>
           </div>
           <div class="page__bd page__bd_spacing">
                
           </div>
       </div>
       <div class="page msg_success js_show" v-if="succeed">
           <div class="weui-msg">
               <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
               <div class="weui-msg__text-area">
                   <h2 class="weui-msg__title">操作成功</h2>
                   <p class="weui-msg__desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a></p>
               </div>
               <div class="weui-msg__opr-area">
                   <p class="weui-btn-area">
                       <wx-button class="weui-btn weui-btn_primary" @click.native="succeed = false">成功提示页</wx-button>
                       <wx-button class="weui-btn" @click.native="succeed = false,fail = true">失败提示页</wx-button>
                   </p>
               </div>
               <div class="weui-msg__extra-area">
                   <div class="weui-footer">
                       <p class="weui-footer__links">
                           <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
                       </p>
                       <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
                   </div>
               </div>
           </div>
       </div>


       <div class="page msg_warn js_show" v-if="fail">
           <div class="weui-msg">
               <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
               <div class="weui-msg__text-area">
                   <h2 class="weui-msg__title">操作失败</h2>
                   <p class="weui-msg__desc">内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a></p>
               </div>
               <div class="weui-msg__opr-area">
                   <p class="weui-btn-area">
                        <wx-button class="weui-btn weui-btn_primary" @click.native="succeed = false,fail = false">推荐操作</wx-button>
                        <wx-button class="weui-btn weui-btn_primary" @click.native="succeed = false,fail = false">辅助操作</wx-button>
                   </p>
               </div>
               <div class="weui-msg__extra-area">
                   <div class="weui-footer">
                       <p class="weui-footer__links">
                           <a href="javascript:void(0);" class="weui-footer__link">底部链接文本</a>
                       </p>
                       <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>
<script>
    export default{
        data(){ return {succeed:false,fail:false} },
    }
</script>
<style lang="less">
    @import "../../static/style/widget/weui-page/weui-msg";
</style>