import Vue from 'vue'
import Router from 'vue-router'

import Header from 'PAGES/Header.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Header
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
