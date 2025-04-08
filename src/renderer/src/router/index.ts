import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../view/Layout/index.vue'
import Login from '../view/Login/index.vue'
import Register from '../view/Register/index.vue'
import ClubRegistration from '../view/Club/ClubRegistration/index.vue'
import CreateClub from '../view/Club/CreateClub/index.vue'
import ActivityRegistration from '../view/Activity/ActivityRegistration/index.vue'
import ActivityPayment from '../view/Activity/ActivityPayment/index.vue'
import CreateActivity from '../view/Activity/CreateActivity/index.vue'
import ClubApproval from '../view/Club/ClubApproval/index.vue'
import NotFound from '../view/Error/NotFound/index.vue'
import Forbidden from '../view/Error/Forbidden/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    meta: {
      title: '仪表盘',
      icon: 'dashboard',
      requiresAuth: true // 需要登录
    },
    children: [
      {
        path: 'club-registration',
        name: 'club-registration',
        component: ClubRegistration,
        meta: {
          title: '社团报名',
          icon: 'club',
          requiresAuth: true // 需要登录
        }
      },
      {
        path: 'create-club',
        name: 'create-club',
        component: CreateClub,
        meta: {
          title: '创建社团',
          icon: 'create',
          requiresAuth: true // 需要登录
        }
      },
      {
        path: 'activity-registration',
        name: 'activity-registration',
        component: ActivityRegistration,
        meta: {
          title: '活动报名',
          icon: 'activity',
          requiresAuth: true // 需要登录
        }
      },
      {
        path: 'activity-payment',
        name: 'activity-payment',
        component: ActivityPayment,
        meta: {
          title: '活动缴费',
          icon: 'payment',
          requiresAuth: true // 需要登录
        }
      },
      {
        path: 'create-activity',
        name: 'create-activity',
        component: CreateActivity,
        meta: {
          title: '创建活动',
          icon: 'create-activity',
          requiresAuth: true // 需要登录
        }
      },
      {
        path: 'club-approval',
        name: 'club-approval',
        component: ClubApproval,
        meta: {
          title: '社团审批',
          icon: 'approval',
          requiresAuth: true // 需要登录
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      hidden: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    name: 'forbidden',
    component: Forbidden,
    meta: {
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: {
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
