import Vue from 'vue'
import Router from 'vue-router'
import TaskIndex from 'COMPONENTS/TaskIndex'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: TaskIndex
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
