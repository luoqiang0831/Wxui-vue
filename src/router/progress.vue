<template>
    <div class="page progress js_show">
        <div class="page__hd">
            <h1 class="page__title">Progress</h1>
            <p class="page__desc">进度条</p>
        </div>
        <div class="page__bd page__bd_spacing">
            <wx-progress :value="progress"></wx-progress>
            <br>
            <wx-progress :value="progress"></wx-progress>
            <br>
            <wx-progress :value="progress"></wx-progress>
            <br>
            <wx-button :class="[state?'weui-btn_disabled':'','weui-btn weui-btn_primary']"  @click.native="testStart">上传</wx-button>
        </div>
    </div>
</template>
<script>
 
    export default{
        data:()=>{return { progress:0 , state:false } },
        methods:{
            next:function(){

                if(this.progress > 100){
                    this.progress = 100;
                    this.state=false;
                    return;
                }

                this.progress = ++this.progress;

                setTimeout(this.next, 20);
            },
            testStart:function(){

                if (this.state) return;

                this.progress = 0;

                this.state=true;

                this.next();
            },

        }
    }
</script>

<style lang="less">
   // progress
   @import "../../static/style/widget/weui-progress/weui-progress";
</style>