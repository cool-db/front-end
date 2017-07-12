import Vue from 'vue'
import Router from 'vue-router'
import FileMaster from '@/components/FileMaster.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: FileMaster
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
