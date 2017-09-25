// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import initScroll from '@/plugins/init-scroll'
Vue.config.productionTip = false
Vue.use(initScroll);
//引用muse-ui组件库
// require('@/components/muse-ui');

// import '@/components/muse-ui'
//引用ele-ui组件库
// import '@/components/element-ui'
require('@/components/element-ui')
/* eslint-disable no-new */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})
