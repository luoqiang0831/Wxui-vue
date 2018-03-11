<template>
    <div>
        <div class="page__hd">
            <h1 class="page__title">Badge</h1>
            <p class="page__desc">徽章</p>
        </div>
        <div class="page__bd">
            <wx-list-group title="新消息提示跟摘要信息后，统一在列表右侧">
                <wx-list arrow type="bubble">
                    <span>单行列表</span>
                    <template slot="tips">
                        <span style="vertical-align:middle; font-size: 17px;">详细信息</span>
                        <span class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;"></span>
                    </template>
                </wx-list>
            </wx-list-group>

            <wx-list-group title="未读数红点跟在主题信息后，统一在列表左侧">
                <wx-list type="bubble">
                    <template slot="icon">
                        <img  style="width: 50px;height:50px;display: block">
                        <span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
                    </template>
                    <p>
                        <p>联系人名称</p>
                        <p style="font-size: 13px;color: #888888;">摘要信息</p>
                    </p>
                </wx-list>
                <wx-list arrow type="bubble">
                    <template>
                        <span style="vertical-align: middle">单行列表</span>
                        <span class="weui-badge" style="margin-left: 5px;">8</span>
                    </template>
                    <template slot="tips"> </template>
                </wx-list>
                <wx-list arrow type="bubble">
                    <template>
                        <span style="vertical-align: middle">单行列表</span>
                        <span class="weui-badge" style="margin-left: 5px;">8</span>
                    </template>
                    <template slot="tips">详细信息</template>
                </wx-list>
                <wx-list arrow type="bubble">
                    <template>
                        <span style="vertical-align: middle">单行列表</span>
                        <span class="weui-badge" style="margin-left: 5px;">New</span>
                    </template>
                    <template slot="tips"><span></span></template>
                </wx-list>
            </wx-list-group>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            succeed:function(){

                this.$toast("成功")
            },
            delafter:function(el,target){
                console.log(el,target)
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