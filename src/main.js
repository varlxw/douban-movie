// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'
import VueResource from 'Vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import store from './vuex'
Vue.config.productionTip = false
Vue.use(vueRouter)
Vue.use(VueResource)
Vue.use(MintUI)
import Hit from './components/hit/hit'
/* eslint-disable no-new */
const routes = [
  { path: '/', redirect: '/hit' },
  {path: '/hit', component: Hit},
  {path: '/soon', component: Hit},
  {path: '/ranking', component: Hit}
]
const router = new vueRouter({
  linkActiveClass: 'active',
  routes
})
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
