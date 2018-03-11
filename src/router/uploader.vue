<template>
  <div>
    <div class="page__hd">
        <h1 class="page__title">Uploader</h1>
        <p class="page__desc">上传组件，一般配合<a class="link" href="#gallery">组件Gallery</a>来使用。</p>
    </div>
    <div class="page__bd">
        <!--未有后台调试接口-->
        <wx-uploader></wx-uploader>
    </div>
  </div>
</template>
<script>
    export default{
        methods:{
            succeed:function(){

                this.$toast("成功")
            },
        }
    }
</script>