import Vue from 'vue'
import Router from 'vue-router'

import Header from 'PAGES/Header.vue'
import Project from 'PAGES/Project.vue'
import TaskHome from 'PAGES/TaskHome.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  component: Header,
  redirect: '/project',
  children: [{
    path: '/project',
    redirect: '/project/task',
    component: Project,
    children: [{
      path: '/project/task',
      component: TaskHome
    }]
  }]
}]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
