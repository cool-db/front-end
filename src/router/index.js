import Vue from 'vue'
import Router from 'vue-router'
import TaskModal from 'COMPONENTS/TaskModal.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: TaskModal
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
