import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//Register globally
import QuantityCounter from './components/QuantityCounter'
import PageContent from './components/PageContent'
import Basket from './components/Basket2'
import Routes from './routes.js'
Vue.use(VueRouter)
Vue.component('basket',Basket)
Vue.component('pageContent',PageContent)
Vue.component('custBtn',QuantityCounter)
Vue.config.productionTip = false
const myRouter = new VueRouter({
  routes: Routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
