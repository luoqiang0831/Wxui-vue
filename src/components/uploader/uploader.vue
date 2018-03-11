<template>
  <div>
    <gallery :imgPath.sync="showPath" v-on:delImg="delUpImg"></gallery>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                        <p class="weui-uploader__title">图片上传</p>
                        <div class="weui-uploader__info">0/{{upImgList.length}}</div>
                    </div>
                    <div class="weui-uploader__bd">
                        <ul class="weui-uploader__files">
                            <up-img v-for="item in upImgList" :key="item.id" v-on:show="showEv" :imgsrc="item.src" :state="item.state" :progress="item.progress" ></up-img>
                        </ul>
                        <div class="weui-uploader__input-box">
                            <input id="uploaderInput" @change="addImgUpload" class="weui-uploader__input" type="file" accept="image/*" multiple/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import upImg from './upImg.vue';
import Gallery from '../gallery/gallery.vue';
export default {
  components:{
    upImg,
    Gallery
  },
  name: 'wx-uploader',
  data:()=>{return { upImgList:[],showPath:""}},
  props: {
      
  },
  methods:{
    addImgUpload:function(e){
      var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;
      for (var i = 0, len = files.length; i < len; ++i) {
          var file = files[i];

          if (url) {
              src = url.createObjectURL(file);
          } else {
              src = e.target.result;
          }

          this.upImgList.push({"src":src,"state":"ready","progress":0})
      }
    },
    showEv:function(imgsrc){

      this.showPath=imgsrc;

    },
    delUpImg:function(){

      var _index;

      if((_index=this.upImgList.findIndex((value,index)=>value.src==this.showPath))>=0){

        this.upImgList.splice(_index, 1);

        this.showPath=""
      }
      
    }

  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-uploader";
</style>