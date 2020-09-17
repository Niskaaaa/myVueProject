import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})