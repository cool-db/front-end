import Vue from 'vue'
import Router from 'vue-router'
import home from 'PAGES/home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: home
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
