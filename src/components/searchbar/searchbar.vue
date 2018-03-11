<template>
  <div class="page__bd">
      <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
      <div class="weui-search-bar" :class="focusStyle" id="searchBar">
          <form class="weui-search-bar__form">
              <div class="weui-search-bar__box">
                  <i class="weui-icon-search"></i>
                  <input type="search" v-model="inputVal" class="weui-search-bar__input" @input="inputChange" @blur="searchInputBlur" ref="searchInput" placeholder="搜索" required="">
                  <a href="javascript:" class="weui-icon-clear" @click="searchClear"></a>
              </div>
              <label class="weui-search-bar__label" @click="focus = true" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                  <i class="weui-icon-search"></i>
                  <span>搜索</span>
              </label>
          </form>
          <a href="javascript:" class="weui-search-bar__cancel-btn" @click="inputVal='',focus=false">取消</a>
      </div>
      <div class="weui-cells searchbar-result" id="searchResult" :style="showResult">

          <div class="weui-cell weui-cell_access" v-for="item in result" v-if="item.value!=undefined" key="item.key" @click="tapSearchItem(item)">
              <div class="weui-cell__bd weui-cell_primary">
                  <p>{{item.value}}</p>
              </div>
          </div>

      </div>
  </div>
</template>
<script>
export default {
  name:"wx-search-bar",
  data(){
    return{
      focus:false,//文本框搅局
      inputVal:'',//文本框内容
      resultShow:true //搜索结果显示
    }
  },
  props: {
      value:{
        type:String,
        default:''
      },
      result:{
        type:Array,
        default:()=>{return []; }
      },
      tap:Function
      
  },
  computed: {
      focusStyle() {

          this.$refs.searchInput && this.$refs.searchInput.focus();

          return this.focus ? 'weui-search-bar_focusing' : '';
      },
      showResult() {

          return this.result.length<=0 || this.inputVal=='' || this.resultShow==false?'display:none':'display:block';
      }
  },
  methods:{
    searchClear:function (){

        this.inputVal='';

        this.$refs.searchInput.focus();
    },
    //搜索
    moveOutSearch:function () {

        this.inputVal='';

        this.focus=false;
    },
    //搜索关闭
    searchCancel:function () {
        this.moveOutSearch();
        this.$refs.searchInput.blur();
    },
    searchInputBlur:function(){

      if (!this.inputVal.length) this.moveOutSearch();

    },
    //点击搜索结果回调
    tapSearchItem:function(sval){

      this.inputVal=sval.value;

      typeof this.tap==='function' && this.tap(sval);

      this.resultShow=false;
    },
    //文本框 input事件
    inputChange:function(){

      this.resultShow=true;

      this.$emit('input', this.inputVal)

    }
  }
}
</script>

<style lang="less">
    @import "../../../static/style/widget/weui-searchbar/weui-searchbar";
</style>