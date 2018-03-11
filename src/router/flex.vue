<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Flex</h1>
            <p class="page__desc">Flex布局</p>
        </div>
        <div class="page__bd page__bd_spacing">
            <div class="weui-flex">
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            </div>
            <div class="weui-flex">
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            </div>
            <div class="weui-flex">
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            </div>
            <div class="weui-flex">
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
            </div>
            <div class="weui-flex">
                <div><div class="placeholder">weui</div></div>
                <div class="weui-flex__item"><div class="placeholder">weui</div></div>
                <div><div class="placeholder">weui</div></div>
            </div>
        </div>
    </div>
</template>
<style>
    .placeholder {
        margin: 5px;
        padding: 0 10px;
        background-color: #ebebeb;
        height: 2.3em;
        line-height: 2.3em;
        text-align: center;
        color: #cfcfcf;
    }

</style>
<style lang="less">
    // article
    @import "../../static/style/widget/weui-flex/weui-flex";
</style>
