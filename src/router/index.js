import Vue from 'vue'
import Router from 'vue-router'

import Header from 'PAGES/Header.vue'
import Project from 'PAGES/Project.vue'
import TaskHome from 'PAGES/TaskHome.vue'
import Schedule from 'PAGES/Schedule.vue'
import File from 'PAGES/File.vue'
import My from 'PAGES/My.vue'
import PersonalSetting from 'PAGES/PersonalSetting.vue'
import TaskModal from 'COMPONENTS/TaskModal.vue'
import HomePageSection from 'PAGES/HomePageSection.vue'
import Auth from 'PAGES/Auth.vue'
import Login from 'PAGES/Login.vue'

Vue.use(Router)

// const routes = [{
//   path: '/',
//   component: Header,
//   redirect: '/project',
//   children: [{
//     path: '/project',
//     redirect: '/project/task',
//     component: Project,
//     children: [{
//       path: '/project/task',
//       component: TaskHome
//     }, {
//       path: '/project/schedule',
//       component: Schedule
//     }, {
//       path: '/project/file',
//       component: File
//     }]
//   }, {
//     path: '/my',
//     component: My
//   }]
// }]
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
  }, {
    path: '/auth',
    component: Login
  }]
}, {
  path: '/modal',
  component: TaskModal
}]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
