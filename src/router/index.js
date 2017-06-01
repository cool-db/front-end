import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'COMPONENTS/Hello.vue'

Vue.use(Router)

const routes = [
  {
    path: '/hello',
    component: Hello
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
