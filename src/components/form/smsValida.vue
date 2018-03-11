<template>
 	<div class="weui-cell weui-cell_vcode">
    <div class="weui-cell__hd"><label class="weui-label">{{name}}</label></div>
    <div class="weui-cell__bd"><input type="tel" pattern="[0-9]*" maxlength="11" placeholder="请输入手机号" ref="mValue" class="weui-input"></div>
    <div class="weui-cell__ft"><button class="weui-vcode-btn" @click="sendCode">获取验证码</button></div>
  </div>
</template>
<script>
import { checkMobile } from "../../assets/method.js";
export default {
  name: 'wx-sms-valida',
  props: {
     name:String,
     time:String,
     callback:String
  },
  methods:{
      sendCode:function(e){

        if(this.timer || !checkMobile(this.$refs.mValue.value))return;

        this.$emit("click",this.$refs.mValue.value);

        var _tempTime=~~this.time||60,

            beforeText=e.target.innerHTML;

        this.timer=setInterval(function(){

                    _tempTime--;

                    if(_tempTime==0){

                      clearInterval(this.timer);

                      this.timer=null;

                      e.target.innerHTML=beforeText;

                      return;

                    }

                    e.target.innerHTML=_tempTime+"s后重新获取"

              }.bind(this),1000)

      }
  }

  // 	validatorInput(val, showError) {

  // 	    if(this.required && val === '') {
  // 	        this.error('不能为空', 'NOT_NULL');
  // 	        return;
  // 	    }

  // 	    if (this.min && val.length < this.min) {
  // 	        this.error(`最少输入${this.min}位字符`, 'NOT_MIN_SIZE');
  // 	        return;
  // 	    }

  // 	    const v = this.regex === 'bankcard' ? val.replace(/\s/g, '') : val;
  // 	    const reg = this.regexObj[this.regex] ? this.regexObj[this.regex] : this.trim(this.regex, '/');
  // 	    if (!!v && this.regex && !new RegExp(reg).test(v)) {
  // 	        this.error('输入字符不符合规则', 'NOT_REGEX_RULE');
  // 	        return;
  // 	    }

  // 	},
  // 	validationBlur:function(e){

  // 		this.validatorInput(this.currentValue, true)

  // 		this.handleBlur && this.handleBlur(e);

  // 	}

  // }
}
</script>
