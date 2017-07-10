import Vue from 'vue'
import Router from 'vue-router'
import project from 'PAGES/project'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: project
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
