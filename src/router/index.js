import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'PAGES/Home.vue'
import My from 'PAGES/My.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: My
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
