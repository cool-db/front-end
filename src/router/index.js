import Vue from 'vue'
import Router from 'vue-router'
import ModalWrapper from 'COMPONENTS/Modal/ModalWrapper.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: ModalWrapper
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
