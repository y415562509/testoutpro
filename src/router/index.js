import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('@/components/login/login.vue')
    },
    {
      name: 'home',
      path: '/',
      component: () => import('@/components/home/home.vue'),
      children: [{
        name: 'users',
        path: 'users',
        component: () => import('@/view/users')
      }]
    }
  ]
})
