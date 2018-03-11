<template>
  <div :class="[imgPath=='' ? 'hide' : 'show','weui-gallery']">
      <span class="weui-gallery__img" @click="hideImgLayer" :style="{backgroundImage:'url('+imgPath+')'}"></span>
      <div class="weui-gallery__opr">
          <a href="javascript:" class="weui-gallery__del" @click="delImg">
              <i class="weui-icon-delete weui-icon_gallery-delete"></i>
          </a>
      </div>
  </div>
</template>
<script>
export default {
  name: 'wx-gallery',
  props: {
      imgPath:{
        type:String,
        default:''
      }
  },

  methods:{

    hideImgLayer:function(){

      this.$emit('update:imgPath', '');
      
    },
    delImg:function(){

      this.$emit('delImg',this.imgPath)
      
    }

  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-gallery";
</style>