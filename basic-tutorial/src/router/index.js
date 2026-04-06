import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Reactivities from '../components/Reactivities.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/reactivity', component: Reactivities },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router