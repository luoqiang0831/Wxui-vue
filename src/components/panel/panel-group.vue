<template>
  <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd" v-if="title">{{title}}</div>
      <div class="weui-panel__bd">
          <slot></slot>
      </div>
      <div class="weui-panel__ft">
          <a :href="href" class="weui-cell weui-cell_access weui-cell_link" v-if="moretype=='a'">
              <div class="weui-cell__bd">{{moretext}}</div>
              <span class="weui-cell__ft"></span>
          </a>

          <router-link class="weui-cell" :to="href" v-else-if="moretype == 'router' ">
            <div class="weui-cell__bd">{{moretext}}</div>
            <span class="weui-cell__ft"></span>
          </router-link>
      </div>
  </div>
</template>
<script >
export default {
  name: 'wx-panel',
  props: {
      title:{
        type:String,
        default:''
      },
      href:{
        type:String,
        default:'javascript:void(0);'
      },
      moretext:{
        type:String,
        default:'查看更多'
      },
      moretype: {
          validator (value) {
              return ['router', 'a'].indexOf(value) > -1;
          },
          default: 'a'
      },
  },
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-media-box/weui-media-box";
    @import "../../../static/style/widget/weui-panel/weui-panel";
    
</style>