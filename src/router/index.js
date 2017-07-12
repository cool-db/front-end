import Vue from 'vue'
import Router from 'vue-router'
import MyTask from '@/components/MyTask.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: MyTask
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
