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
      path: '/problem',
      name: 'problem',
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
      path: '/detailcourse/:courseId',
      name: 'detailcourse',
      component: () => import('../views/DetailCourseView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/editprofile',
      name:  'EditProfile',
      component: () => import('../views/EditProfile.vue')
    },
    {
      path: '/payment',
      name:  'payment',
      component: () => import('../views/PaymentPage.vue')
    },
    {
      path: '/Viewadmin',
      name:  'Viewadmin',
      component: () => import('../views/CourseAdmin.vue')
    },
    {
      path: '/Addcourse',
      name:  'Addcourse',
      component: () => import('../views/AdminAddCourse.vue')
    },
    {
      path: '/Viewproblem',
      name:  'Viewproblem',
      component: () => import('../views/AdminProblemView.vue')
    },
    // {
    //   path: '/approve',
    //   name:  'ApprovePayment',
    //   component: () => import('../views/ApprovePayment.vue')
    // },
  
  
  {
  
      path: '/study/:courseId',
      name:  'StudyCourseView',
      component: () => import('../views/StudyCourseView.vue')
    },

  
  ]
})

export default router
