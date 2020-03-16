import Vue from 'vue'
import App from "@/App.vue";
import routes from './router'
import VueRouter from "vue-router";

import BootstrapVue from "bootstrap-vue";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
