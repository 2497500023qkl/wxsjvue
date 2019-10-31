import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'wechat',
    component: () => import( '../views/wechat.vue')
  },
  {
    path: '/maillist',
    name: 'maillist',
    component: () => import( '../views/maillist1.vue')
  },
  {
    path: '/find',
    name: 'find',
    component: () => import( '../views/find.vue')
  },
  {
    path: '/i',
    name: 'i',
    component: () => import( '../views/i.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/Home.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
