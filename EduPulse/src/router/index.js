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
      meta: { requiresAuth: true },
      component: () => import('../views/ReportView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/mycourse',
      name: 'mycourse',
      meta: { requiresAuth: true },
      component: () => import('../views/MyCourse.vue')
    },
    {
      path: '/detailcourse/:courseId',
      name: 'detailcourse',
      meta: { requiresAuth: true },
      component: () => import('../views/DetailCourseView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/editprofile',
      name: 'EditProfile',
      meta: { requiresAuth: true },
      component: () => import('../views/EditProfile.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      meta: { requiresAdmin: true },
      component: () => import('../views/PaymentPage.vue')
    },
    {
      path: '/Viewadmin',
      name: 'Viewadmin',
      meta: { requiresAdmin: true },
      component: () => import('../views/CourseAdmin.vue')
    },
    {
      path: '/Addcourse',
      name: 'Addcourse',
      meta: { requiresAdmin: true },
      component: () => import('../views/AdminAddCourse.vue')
    },
    {
      path: '/Viewproblem',
      name: 'Viewproblem',
      meta: { requiresAdmin: true },
      component: () => import('../views/AdminProblemView.vue')
    },
    // {
    //   path: '/approve',
    //   name:  'ApprovePayment',
    //   component: () => import('../views/ApprovePayment.vue')
    // },


    {

      path: '/study/:courseId',
      name: 'StudyCourseView',

      component: () => import('../views/StudyCourseView.vue')
    },

    {

      path: '/approve',
      name: 'Approvepayment',
      meta: { requiresAdmin: true },
      component: () => import('../views/ApprovePayment.vue')
    },

    {

      path: '/buy/:courseId',
      name: 'BuyCourse',
      meta: { requiresAuth: true },
      component: () => import('../views/BuyCourseView.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/404.vue'),
    },



  ]
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem('userId') !== null;

    if (isAuthenticated) {
      next(); // Allow navigation
    } else {
      alert('Please login');
      router.push('/signin'); // Redirect to the login page
    }
  } else if (to.meta.requiresAdmin) {
    // Check if the user is an admin
    const isAdmin = localStorage.getItem('userId') === 'd7afeb6e-ab7d-4f22-a92a-87d7e66995b2';

    if (isAdmin) {
      next(); // Allow navigation
    } else {
      
      router.push('/404'); // Redirect to the login page
    }
  } 
  else {
    next(); // Allow navigation for routes without permission checks
  }
});

export default router
