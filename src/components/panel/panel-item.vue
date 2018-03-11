<template>
  <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-if="type == 'a' ">
      <div class="weui-media-box__hd" v-if="checkImg">
          <slot name="img"></slot>
      </div>
      <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title"><slot name="title"></slot></h4>
          <p class="weui-media-box__desc"><slot></slot></p>
          <Info :info="infodata" v-if="infodata.length>0">
                <li class="weui-media-box__info__meta"
                    v-for="item in infodata">{{item.name}}:{{item.val}}</li>
          </Info>
      </div>
  </a>
  <router-link class="weui-media-box weui-media-box_appmsg" :to="href" v-else-if="type == 'router' ">
    <div class="weui-media-box__hd" v-if="checkImg">
        <slot name="img"></slot>
    </div>
    <div class="weui-media-box__bd">
       <h4 class="weui-media-box__title"><slot name="title"></slot></h4>
       <p class="weui-media-box__desc"><slot></slot></p>
       <Info :info="infodata" v-if="infodata.length>0">
             <li class="weui-media-box__info__meta"
                 v-for="item in infodata">{{item.name}}:{{item.val}}</li>
       </Info>
    </div>
  </router-link>

  <div class="weui-media-box weui-media-box_appmsg" v-else-if="type == 'div' ">
    <div class="weui-media-box__hd" v-if="checkImg">
        <slot name="img"></slot>
    </div>
    <div class="weui-media-box__bd">
       <h4 class="weui-media-box__title"><slot name="title"></slot></h4>
       <p class="weui-media-box__desc"><slot></slot></p>
        <Info :info="infodata" v-if="infodata.length>0">
              <li class="weui-media-box__info__meta"
                  v-for="item in infodata">{{item.name}}:{{item.val}}</li>
        </Info>
    </div>
  </div>
</template>
<script>
import Info from './panel-info.vue';
export default {
  name: 'wx-panel-item',
  components:{
    Info
  },
  props:{
    type: {
        validator (value) {
            return ['router', 'a' , 'del' ,'div', 'bubble'].indexOf(value) > -1;
        },
        default: 'a'
    },
    infodata:{
      type:Array,
      default: ()=>{
        return []
      }
    }
  },
  computed:{
      checkImg() {
          return !!this.$slots.img;
      }
  },
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-cell/weui-cell_swiped";
    @import "../../../static/style/widget/weui-tips/weui-badge";
</style>