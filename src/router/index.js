import Vue from 'vue'
import Router from 'vue-router'
// import MyTask from '@/components/MyTask.vue'
// import RecentTask from '@/components/RecentTask.vue'
import MyCalendar from '@/components/MyCalendar.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: MyCalendar
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
