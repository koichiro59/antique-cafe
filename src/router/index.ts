import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top.vue'
import Product from '../views/Product.vue'
import Shop from '../views/Shop.vue'
import Reserve from '../views/Reserve.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Top
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: Reserve
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})
export default router
