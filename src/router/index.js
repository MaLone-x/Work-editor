import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path: '/SMSLogin',
      name: 'SMSLogin',
      component: () => import('../views/SMSLogin/index.vue')
    }
  ]
})

export default router
