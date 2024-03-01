import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/AllCourseView.vue')
    },
    {
      path: '/test',
      name: 'MainView',
      component: () => import('../views/SigninView.vue')
    }
  ]
})

export default router
