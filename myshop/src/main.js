// The Vue build version to load with the `import` command

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import router from './router'
// import router from './router'
import store from './store'

Vue.component(Button.name,Button)//<mt-button>

new Vue({
  el: '#app',
  render: h => h(App),
  router,store//vue-router 和vuex
})