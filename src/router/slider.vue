<template>
  <div>
      <div class="page__hd">
          <h1 class="page__title">Slider</h1>
          <p class="page__desc">滑块</p>
      </div>
      <div class="page__bd page__bd_spacing">
          <p class="page__desc">失效</p>
          <wx-slider disabled :maxvalue="80" :minvalue="30"></wx-slider>
          <br>
          <p class="page__desc">设置最大最小值</p>
          <wx-slider :maxvalue="80" :value.sync="par" :minvalue="30"></wx-slider>
          <p class="page__desc">设置初始值 数据同步</p>
          <wx-slider :value.sync="par1" ></wx-slider>
          <div class="weui-slider-box__value">{{par}}</div>
      </div>

  </div>
</template>
<script>
    export default{
        data:()=>{return {par:44,par1:44}},
        watch:{
          par:function(newPar,oldPar){
            console.log(newPar,oldPar)
          },
        },
        methods:{
            succeed:function(){

                this.$toast("成功")
            },
        }
    }
</script>