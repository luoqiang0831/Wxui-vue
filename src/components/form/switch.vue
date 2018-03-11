<template>
 	<div class="weui-cell weui-cell_switch">
      <div class="weui-cell__bd" v-html="name"></div>
      <div class="weui-cell__ft">
          <input class="weui-switch" @click="_handle" type="checkbox" :checked="checked" :disabled="disabled">
      </div>
  </div>
</template>
<script>
export default {
  name: 'wx-switch',
  props: {
     name:String,
     checked:{
        type:[Boolean,String],
        default: false,
        validator: function (value) {
          return [false,true,"checked"].indexOf(value) >= 0
        }
     },
     disabled:String
  },
  data(){
    return {value:this.checked}
  },
  methods:{
      _handle:function(e){

        this.value=!this.value

        this.$emit("click",this.value);

      }
  }

}
</script>
<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-switch";
</style>
    

