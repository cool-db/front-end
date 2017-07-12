import Vue from 'vue'
import Router from 'vue-router'
import RecentTask from '@/components/RecentTask.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: RecentTask
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
