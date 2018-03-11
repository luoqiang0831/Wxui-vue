<template>
 	<div class="weui-cell weui-cell_vcode">
    <div class="weui-cell__hd"><label class="weui-label" v-html="name"></label></div>
    <div class="weui-cell__bd"><input type="number" placeholder="请输入验证码" class="weui-input"></div>
    <div class="weui-cell__ft"><img :src="url+'&rm='+Math.random()" @click="reload" class="weui-vcode-img"></div>
  </div>
</template>
<script>
export default {
  name: 'wx-vcode',
  props: {
     name:String,
     url:String
  },
  methods:{
      reload:function(e){

        e.target.setAttribute("src",this.url+(this.url.indexOf("?")<0?"?":"&")+("rm="+Math.random()))

      }
  }
}
</script>
