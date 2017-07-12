import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'PAGES/Home.vue'
import HomepageProject from 'COMPONENTS/HomepageProject.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: HomepageProject
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
