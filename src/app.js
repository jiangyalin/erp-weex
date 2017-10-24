import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import routes from './router/router'

import App from './index.vue'

Vue.prototype.$ajax = axios
Vue.use(VueRouter)
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

new Vue({
  el: '#root',
  router,
  template: '</App>',
  render: h => h(App)
});


