<template>
  <div>
    <wx-mask v-model="show" v-on:click.native="close"></wx-mask>
    <div class="weui-actionsheet" :class="show ? 'weui-actionsheet_toggle' : ''">
        <div class="weui-actionsheet__title">
            <p class="weui-actionsheet__title-text">{{title}}</p>
        </div>
        <div class="weui-actionsheet__menu">
            <div class="weui-actionsheet__cell" v-for="item in list" :key="item.id" @click.stop="tapItem(item)" >{{item.text}}</div>
        </div>
        <div class="weui-actionsheet__action">
            <div class="weui-actionsheet__cell" @click="closeSheet">取消</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wx-ios-sheet',
  data() {
      return {
          show: this.value
      }
  },
  
  props: {
      list:{
        type:Array,
        default:()=>{
          return []
        }
      },
      value: {
          type: Boolean,
          default: false
      },
      cancel:Function,
      title:String
  },
  watch: {
      value(val) {
        this.show = val;
      }
  },
  methods:{

    closeSheet:function(){

      typeof this.cancel === 'function' && this.cancel(item);

      this.close();

    },
    close:function(){

      this.$emit('input', false);

    },
    tapItem:function(target){

      typeof target.callback === 'function' && target.callback(target);

      this.closeSheet();
    }
  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-tips/weui-actionsheet";
</style>