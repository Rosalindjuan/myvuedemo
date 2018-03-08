import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/home/home'
// import '@/assets/css/reset.scss'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
