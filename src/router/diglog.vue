<template>
    <div class="page button js_show">
        <div class="page__hd">
                <h1 class="page__title">Dialog</h1>
                <p class="page__desc">对话框</p>
            </div>
            <div class="page__bd page__bd_spacing">
                <wx-button class="weui-btn weui-btn_primary" @click.native="confirm">Confirm</wx-button>
                <wx-button class="weui-btn weui-btn_warn" @click.native="alert">Alert</wx-button>
                <wx-button class="weui-btn weui-btn_primary" @click.native="confirm1">自定义</wx-button>
            </div>
    </div>
</template>
<script>
    export default{
        methods:{
            alert:function(){

                this.$alert({
                    content:"测试内容",
                    btnName:"取消",
                    callback:()=>{
                        console.log("!23")
                    }
                })
            },
            confirm:function(){

                this.$confirm({
                    content:"Confirm测试内容",
                    btns:function(s,o){
                        console.log(s,o)
                    }
                })
            },

            confirm1:function(){

                this.$confirm({
                    tit:"测试标题",
                    content:"Confirm测试内容",
                    btns:[
                        {
                            txt:"确认",
                            btnStyle:"weui-btn_primary",
                            state:true,
                            color:true,
                            callback:(s)=>{
                                if(s===true) console.log("点击了确认")
                            }
                        },
                        {
                            txt:"打酱油的",
                            btnStyle:"weui-btn_disabled weui-btn_primary",
                            state:"08081",
                            callback:(s)=>{
                                if(s==="08081") console.log("点击了打酱油的")
                            }
                        },
                        {
                            txt:"取消",
                            state:false,
                            callback:(s)=>{
                                if(s===false) console.log("点击了取消")
                            }
                        }
                    ]
                })
            }

        }
    }
</script>