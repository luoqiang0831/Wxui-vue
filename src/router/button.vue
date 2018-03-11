<template>
    <div class="page button js_show">
        <div class="page__hd">
            <h1 class="page__title">Button</h1>
            <p class="page__desc">按钮</p>
        </div>
        <div class="page__bd page__bd_spacing">
            
            <wx-button class="weui-btn" styles="background:#ccc,color:red">自定义Style</wx-button>
            <wx-button class="weui-btn weui-btn_primary" actionType="submit">页面主操作 Normal</wx-button>
            <wx-button class="weui-btn weui-btn_primary weui-btn_loading"><i class="weui-loading"></i>页面主操作 Loading</wx-button>
            <wx-button class="weui-btn weui-btn_disabled weui-btn_primary" >页面主操作 Disabled</wx-button>
            <wx-button class="weui-btn weui-btn_default">页面次要操作 Normal</wx-button>
            <wx-button class="weui-btn weui-btn_default weui-btn_loading"><i class="weui-loading"></i>页面次操作 Loading</wx-button>
            <wx-button class="weui-btn weui-btn_disabled weui-btn_default">页面次要操作 Disabled</wx-button>
            <wx-button class="weui-btn weui-btn_warn">警告类操作 Normal</wx-button>
            <wx-button class="weui-btn weui-btn_warn weui-btn_loading"><i class="weui-loading"></i>警告类操作 Loading</wx-button>
            <wx-button class="weui-btn weui-btn_disabled weui-btn_warn">警告类操作 Disabled</wx-button>
            <div class="button-sp-area">
                <wx-button class="weui-btn weui-btn_plain-default">按钮</wx-button>
                <wx-button class="weui-btn weui-btn_plain-default weui-btn_plain-disabled">按钮</wx-button>
                <wx-button class="weui-btn weui-btn_plain-primary">按钮</wx-button>
                <wx-button class="weui-btn weui-btn_plain-primary weui-btn_plain-disabled">按钮</wx-button>
                <wx-button class="weui-btn weui-btn_mini weui-btn_primary">按钮</wx-button>
                <wx-button class="weui-btn weui-btn_mini weui-btn_default">按钮</wx-button>
                <wx-button class="weui-btn weui-btn_mini weui-btn_warn">按钮</wx-button>
            </div>
        </div>
        <div class="page__ft">
           <!--  <a href="javascript:home()"><img src="./images/icon_footer_link.png" /></a> -->
        </div>
    </div>
</template>