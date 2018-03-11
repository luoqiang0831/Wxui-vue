// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

/*组件引用*/
import WeUi from '@/components/index.js'

/*路由引用*/
import Index from '@/router/index'
import Button from '@/router/button'
import Diglog from '@/router/diglog'
import Toast from '@/router/toast'
import Input from '@/router/from'
import List from '@/router/list'
import Slider from '@/router/slider'
import Uploader from '@/router/uploader'
import Article from '@/router/article'
import Badge from '@/router/badge'
import Flex from '@/router/flex'
import Footer from '@/router/footer'
import Grid from '@/router/grid'
import Icons from '@/router/icons'
import Loadmore from '@/router/loadmore'
import Panel from '@/router/panel'
import Preview from '@/router/preview'
import Progress from '@/router/progress'
import ActionSheet from '@/router/actionsheet'
import Picker from '@/router/picker'
import Msg from '@/router/msg'
import Navbar from '@/router/navbar'
import Tabbar from '@/router/tabbar'
import Layers from '@/router/layers'
import SearchBar from '@/router/searchbar'

Vue.use(Router)
Vue.use(WeUi)

const router = new Router({
  routes: [
  	{path: '/', name: 'index', component: Index},
    {path: '/Button',name: 'button',component: Button},
    {path: '/Diglog',name: 'diglog',component: Diglog},
    {path: '/Toast',name: 'toast',component: Toast},
    {path: '/Input',name: 'input',component: Input},
    {path: '/List',name: 'list',component: List},
    {path: '/Slider',name: 'slider',component: Slider},
    {path: '/Uploader',name: 'uploader',component: Uploader},
    {path: '/Article',name: 'article',component: Article},
    {path: '/Badge',name: 'badge',component: Badge},
    {path: '/Flex',name: 'flex',component: Flex},
    {path: '/Footer',name: 'footer',component: Footer},
    {path: '/Grid',name: 'grid',component: Grid},
    {path: '/Icons',name: 'icons',component: Icons},
    {path: '/Loadmore',name: 'loadmore',component: Loadmore},
    {path: '/Panel',name: 'panel',component: Panel},
    {path: '/Preview',name: 'preview',component: Preview},
    {path: '/Progress',name: 'progress',component: Progress},
    {path: '/ActionSheet',name: 'actionsheet',component: ActionSheet},
    {path: '/Picker',name: 'picker',component: Picker},
    {path: '/Msg',name: 'msg',component: Msg},
    {path: '/Navbar',name: 'navbar',component: Navbar},
    {path: '/Tabbar',name: 'tabbar',component: Tabbar},
    {path: '/SearchBar',name: 'searchbar',component: SearchBar},
    {path: '/Layers',name: 'layers',component: Layers},
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
