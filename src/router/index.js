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
// import Auth from 'PAGES/Auth.vue'
import Login from 'PAGES/Login.vue'
import Register from 'PAGES/Register.vue'
import TaskModal from 'COMPONENTS/TaskModal.vue'

Vue.use(Router)

const routes = [{
  path: '/',
  component: TaskModal,
  // component: Auth,
  // redirect: '/main',
  children: [{
    path: '/main',
    component: Header,
    redirect: '/home',
    meta: { requiresAuth: true },
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

const router = new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: '/auth',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
