<template>
  <div class="page searchbar js_show">
      <div class="page__hd">
          <h1 class="page__title">SearchBar</h1>
          <p class="page__desc">搜索栏</p>
      </div>
      <wx-search-bar v-model="searchVal" :result="searchResult"></wx-search-bar>
  </div>
</template>
<script>
    export default{
        data(){
            return {

                searchVal:'',

                searchResult:[]
            }
        },
        watch:{
            searchVal:function(v){

                this.searchResult=[
                        {"value":v+(Math.random()*1000),"key":"abc"},
                        {"value":v+(Math.random()*1000),"key":"abc"},
                    ];

            }
        },
    }
</script>