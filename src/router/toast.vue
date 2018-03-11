<template>
    <div class="page button js_show">
        <div class="page__hd">
                <h1 class="page__title">Dialog</h1>
                <p class="page__desc">对话框</p>
            </div>
            <div class="page__bd page__bd_spacing">
                <wx-button class="weui-btn weui-btn_primary" @click.native="succeed">succeed</wx-button>
                <wx-button class="weui-btn weui-btn_warn" @click.native="error">load</wx-button>
            </div>
    </div>
</template>
<script>
    export default{
        methods:{
            succeed:function(){

                this.$toast("成功")
            },
            error:function(){

                this.$load({
                    text:"加载中",
                    icon:"cancel",
                    callback:()=>{


                    }
                })
            }

        }
    }
</script>