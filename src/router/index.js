import Vue from 'vue'
import Router from 'vue-router'

import Header from 'PAGES/Header.vue'
import Project from 'PAGES/Project.vue'
import TaskHome from 'PAGES/TaskHome.vue'
import Schedule from 'PAGES/Schedule.vue'
import File from 'PAGES/File.vue'
import My from 'PAGES/My.vue'
import PersonalSetting from 'PAGES/PersonalSetting.vue'
import HomePageSection from 'PAGES/HomePageSection.vue'
import Auth from 'PAGES/Auth.vue'
import Login from 'PAGES/Login.vue'
import Register from 'PAGES/Register.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  component: Auth,
  children: [{
    path: '/main',
    component: Header,
    redirect: '/home',
    children: [{
      path: '/home',
      component: HomePageSection
    }, {
      path: '/project/:pid',
      redirect: '/project/:pid/task',
      component: Project,
      children: [{
        path: '/project/:pid/task',
        component: TaskHome
      }, {
        path: '/project/:pid/schedule',
        component: Schedule
      }, {
        path: '/project/:pid/file',
        component: File
      }]
    }, {
      path: '/my',
      component: My
    }, {
      path: '/setting',
      component: PersonalSetting
    }]
  }, {
    path: '/auth',
    component: Login
  }, {
    path: '/register',
    component: Register
  }]
}]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
