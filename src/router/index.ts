import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/encryption'),
  routes: [
    {
      path: '/',
      component: () => import('@/App.vue'),
    }
  ],
})

export default router
