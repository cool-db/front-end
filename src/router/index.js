import Vue from 'vue'
import Router from 'vue-router'

import Header from 'PAGES/Header.vue'
import Project from 'PAGES/Project.vue'
import TaskHome from 'PAGES/TaskHome.vue'
import Schedule from 'PAGES/Schedule.vue'
import File from 'PAGES/File.vue'
import My from 'PAGES/My.vue'
import PersonalSetting from 'PAGES/PersonalSetting.vue'

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
    }, {
      path: '/project/schedule',
      component: Schedule
    }, {
      path: '/project/file',
      component: File
    }]
  }, {
    path: '/my',
    component: My
  }, {
    path: '/setting',
    component: PersonalSetting
  }]
}]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
