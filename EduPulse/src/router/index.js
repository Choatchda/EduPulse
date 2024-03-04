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
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/SigninView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/ReportView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/mycourse',
      name: 'mycourse',
      component: () => import('../views/MyCourse.vue')
    },
    {
      path: '/detailcourse',
      name: 'detailcourse',
      component: () => import('../views/DetailCourseView.vue')
    },
  ]
})

export default router
