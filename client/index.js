import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router.js'
import createStore from './store/store.js'
import Notification from './components/notification'
import Tabs from './components/tabs'

Vue.use(VueRouter) // vue插件的使用
Vue.use(Vuex)
Vue.use(Notification) // 全局注册的组件，引入之后当做插件使用，所有其他组件中均可使用
Vue.use(Tabs)
const router = createRouter()
const store = createStore()

// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
