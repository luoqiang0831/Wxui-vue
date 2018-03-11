<template>
    <div class="page home" style="opacity:1;">
    <div class="page__hd">
        <h1 class="page__title">
            <img src="../../static/images/logo.png" alt="WeUI" height="21px" />
        </h1>
        <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
    </div>
    <div class="page__bd page__bd_spacing">
        <ul>
            <li>
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">表单</p>
                    <img src="../../static/images/icon_nav_form.png" alt="">
                </div>
                <div class="page__category js_categoryInner">
                    <div class="weui-cells page__category-content">
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'button' }">
                            <div class="weui-cell__bd">
                                <p>Button</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                       <!--  <a  href="javascript:;">
                          
                        </a> -->
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'input' }">
                            <div class="weui-cell__bd">
                                <p>Input</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'list' }">
                            <div class="weui-cell__bd">
                                <p>List</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'slider' }">
                            <div class="weui-cell__bd">
                                <p>Slider</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'uploader' }">
                            <div class="weui-cell__bd">
                                <p>Uploader</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                    </div>
                </div>
            </li>
            <li>
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">基础组件</p>
                    <img src="../../static/images/icon_nav_layout.png" alt="">
                </div>
                <div class="page__category js_categoryInner">
                    <div class="weui-cells page__category-content">
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'article' }">
                            <div class="weui-cell__bd">
                                <p>Article</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'badge' }">
                            <div class="weui-cell__bd">
                                <p>Badge</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'flex' }">
                            <div class="weui-cell__bd">
                                <p>Flex</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'footer' }">
                            <div class="weui-cell__bd">
                                <p>Footer</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'uploader' }">
                            <div class="weui-cell__bd">
                                <p>Gallery</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'grid' }">
                            <div class="weui-cell__bd">
                                <p>Grid</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'icons' }">
                            <div class="weui-cell__bd">
                                <p>Icons</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'loadmore' }">
                            <div class="weui-cell__bd">
                                <p>Loadmore</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'panel' }">
                            <div class="weui-cell__bd">
                                <p>Panel</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'preview' }">
                            <div class="weui-cell__bd">
                                <p>Preview</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'progress' }">
                            <div class="weui-cell__bd">
                                <p>Progress</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                    </div>
                </div>
            </li>
            <li>
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">操作反馈</p>
                    <img src="../../static/images/icon_nav_feedback.png" alt="">
                </div>
                <div class="page__category js_categoryInner">
                    <div class="weui-cells page__category-content">
                        <router-link class="weui-cell weui-cell_access js_item" :to="{ name: 'actionsheet' }">
                            <div class="weui-cell__bd">
                                <p>Actionsheet</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item"  :to="{ name: 'diglog' }">
                            <div class="weui-cell__bd">
                                <p>Dialog</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item"  :to="{ name: 'msg' }">
                            <div class="weui-cell__bd">
                                <p>Msg</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item"  :to="{ name: 'picker' }">
                            <div class="weui-cell__bd">
                                <p>Picker</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" data-id="button" :to="{ name: 'toast' }">
                            <div class="weui-cell__bd">
                                <p>Toast</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                    </div>
                </div>
            </li>
            <li>
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">导航相关</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
                <div class="page__category js_categoryInner">
                    <div class="weui-cells page__category-content">
                        <router-link class="weui-cell weui-cell_access js_item" data-id="button" :to="{ name: 'navbar' }">
                            <div class="weui-cell__bd">
                                <p>Navbar</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                        <router-link class="weui-cell weui-cell_access js_item" data-id="button" :to="{ name: 'tabbar' }">
                            <div class="weui-cell__bd">
                                <p>Tabbar</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                    </div>
                </div>
            </li>
            <li>
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">搜索相关</p>
                    <img src="../../static/images/icon_nav_search.png" alt="">
                </div>
                <div class="page__category js_categoryInner">
                    <div class="weui-cells page__category-content">
                        <router-link class="weui-cell weui-cell_access js_item" data-id="button" :to="{ name: 'searchbar' }">
                            <div class="weui-cell__bd">
                                <p>Search Bar</p>
                            </div>
                            <div class="weui-cell__ft"></div>
                        </router-link>
                    </div>
                </div>
            </li>
            <li>
                <router-link  class="weui-flex js_item"  :to="{ name: 'layers' }">
                    <p class="weui-flex__item">层级规范</p>
                    <img src="../../static/images/icon_nav_z-index.png" alt="">
                </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
