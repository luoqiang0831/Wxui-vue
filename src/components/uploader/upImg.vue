<template>
  <li class="weui-uploader__file" :class="classes" @click="showImg" :style="{backgroundImage: 'url('+imgsrc+')'}">
    <div class="weui-uploader__file-content" >
        <i class="weui-icon-warn" v-if="state=='error'"></i>
        <span v-if="progress!=0">{{progress}}%</span>
    </div>
  </li>
</template>
<script>
export default {
  props: {
      imgsrc:{
        type:String,
        default:'img.jpg'
      },
      state:{
        type:String,
        default:"ready"
      },
      progress:{
        type:Number,
        default:0
      }
  },
  computed: {
      classes() {
          return this.state=="error" || this.progress!=0 ? 'weui-uploader__file_status' : '';
      }
  },
  methods:{
    showImg:function(){
      this.$emit('show',this.imgsrc)
    }
    // $uploaderFiles.on("click", "li", function(){
    //     $galleryImg.attr("style", this.getAttribute("style"));
    //     $gallery.fadeIn(100);
    // });
    // $gallery.on("click", function(){
    //     $gallery.fadeOut(100);
    // });
  }
}
</script>
