import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top.vue'
import Shop from '../views/Shop.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Top
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
