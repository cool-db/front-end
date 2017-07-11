import Vue from 'vue'
import Router from 'vue-router'
import ModalSelectAttach from 'COMPONENTS/ModalSelectAttach.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: ModalSelectAttach
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
