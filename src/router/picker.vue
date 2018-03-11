<template>
  <div class="page picker js_show">
    <div class="page__hd">
        <h1 class="page__title">Picker</h1>
        <p class="page__desc">多列选择器，需要配合js实现</p>
    </div>
    <div class="page__bd page__bd_spacing">
        <wx-button class="weui-btn weui-btn_primary" v-on:click.native="picker = true">单列选择器</wx-button>
        <wx-button class="weui-btn weui-btn_primary" v-on:click.native="timePicker = true">日期选择器</wx-button>
        <wx-picker v-model="picker" :items="list" :cancel="close" :confirm="pickerConfirm"></wx-picker>
        <wx-time-picker v-model="timePicker" :items="list" :cancel="close" :confirm="pickerTimeConfirm"></wx-time-picker>
    </div>
  </div>
</template>
<script >
  export default {
    data:()=>{ return { picker:false, timePicker:false, list:[{label:"火车票"},{label:"飞机票"},{label:"动车票"},{label:"轮船票",disabled:true},{label:"客车票"}]} },
    methods:{
      pickerTimeConfirm:function(data){
        console.log(data)
      },
      pickerConfirm:function(data){
        console.log(data)
      },
      close:function(data){
        console.log("取消之前默认值为"+data)
      }
    }
  }
</script>