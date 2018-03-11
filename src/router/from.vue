<template>
    <div class="page button js_show">
    <div class="page__hd">
        <h1 class="page__title">Input</h1>
        <p class="page__desc">表单输入</p>
    </div>
    <div class="page__bd">

        <div class="weui-cells__tips">底部说明文字底部说明文字</div>

        <div class="weui-cells__title">单选列表项</div>
        <wx-radio-group>
            <wx-cell>
                <p>选项一</p>
                <input slot="input" type="radio" class="weui-check" name="radio1" value="选项一"  v-model="singleElection"/>
            </wx-cell>
            <wx-cell>
                <p>选项二</p>
                <input slot="input" type="radio" class="weui-check" name="radio1" value="选项二"   v-model="singleElection"/>
            </wx-cell>
            <a href="javascript:void(0);" class="weui-cell weui-cell_link">
                <div class="weui-cell__bd">{{singleElection}}</div>
            </a>
        </wx-radio-group>

        <div class="weui-cells__title">复选列表项</div>
        <wx-checkbox-group>
            <wx-cell pos="before">
                <p>选项一</p>
                <input  slot="input" type="checkbox" class="weui-check" value="选项一" checked="checked" v-model="multiSelect" />
            </wx-cell>
            <wx-cell pos="before">
                <p>选项二</p>
                <input slot="input" type="checkbox" class="weui-check"  value="选项二" v-model="multiSelect" />
            </wx-cell>
            <a href="javascript:void(0);" class="weui-cell weui-cell_link">
                <div class="weui-cell__bd">{{multiSelect}}</div>
            </a>
        </wx-checkbox-group>
        
        <div class="weui-cells__title">表单报错</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_warn">
                <div class="weui-cell__hd"><label for="" class="weui-label">卡号</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" value="weui input error" placeholder="请输入卡号"/>
                </div>
                <div class="weui-cell__ft">
                    <i class="weui-icon-warn"></i>
                </div>
            </div>
        </div>


        <div class="weui-cells__title">开关</div>
        <div class="weui-cells weui-cells_form">
            <wx-switch name="开关(disabled)" @click="switchs" :checked="false" disabled="disabled"></wx-switch>
            <wx-switch name="开关" @click="switchs"></wx-switch>
        </div>

        <div class="weui-cells__title">文本框</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入文本"/>
                </div>
            </div>
        </div>

        <div class="weui-cells__title">文本域</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                    <div class="weui-textarea-counter"><span>0</span>/200</div>
                </div>
            </div>
        </div>
        <wx-form title="输入框">
            <wx-item name="手机号">
                <wx-input class="weui-input" type="tel" placeholder="请输入手机号"></wx-input>
            </wx-item>
        </wx-form>
        <wx-form title="输入框">
            <wx-sms-valida time="6" @click="sendCode" name="手机号"></wx-sms-valida>
            <wx-vcode name="验证码" v-model="vcode" url="https://services.torld.com/advertiser_forward/service?service=tor.code"></wx-vcode>
        </wx-form>

        <div class="weui-cells__title">选择</div>
        <div class="weui-cells">

            <div class="weui-cell weui-cell_select weui-cell_select-before">
                <div class="weui-cell__hd">
                    <select class="weui-select" name="select2">
                        <option value="1">+86</option>
                        <option value="2">+80</option>
                        <option value="3">+84</option>
                        <option value="4">+87</option>
                    </select>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码"/>
                </div>
            </div>
        </div>
        <div class="weui-cells__title">选择</div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_select">
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select1">
                        <option selected="" value="1">微信号</option>
                        <option value="2">QQ号</option>
                        <option value="3">Email</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">国家/地区</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">中国</option>
                        <option value="2">美国</option>
                        <option value="3">英国</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="weui-btn-area">
            <wx-button class="weui-btn weui-btn_primary" >确定</wx-button>
        </div>
    </div>
    <div class="page__ft">
       <!--  <a href="javascript:home()"><img src="./images/icon_footer_link.png" /></a> -->
    </div>
</div>
</template>
<script >
    export default {
        data() {
            return {
                multiSelect: ['选项一'],
                singleElection:false,
                test1:"123",
                vcode:""
            }
        },
        methods:{

            test:function(){

                console.log("!23")
            },
            sendCode:function(){

                console.log("发送短信")
            },
            switchs:function(e){

                console.log(e)
            }
        }
    }
</script>
