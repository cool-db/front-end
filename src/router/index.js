import Vue from 'vue'
import Router from 'vue-router'

// import Home from 'PAGES/Home.vue'

import PersonalSetting from 'COMPONENTS/PersonalSetting'
import login from 'COMPONENTS/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    // component: Home
    component: login
  },
  {
    path: '/d',
    component: PersonalSetting,
    name: 'd'
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
