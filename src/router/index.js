import Vue from 'vue'
import Router from 'vue-router'
// import project from 'PAGES/project'
// import file from 'COMPONENTS/File'
// import fileItem from 'COMPONENTS/FileItem'
// import accountPassword from 'COMPONENTS/AccountPassword'
// import avatar from 'COMPONENTS/Avatar'
// import personalInfomation from 'COMPONENTS/PersonalInfomation'
// import Selector from 'COMPONENTS/Selector'
// import PersonalSetting from 'COMPONENTS/PersonalSetting'
// import login from 'COMPONENTS/Login'
// import register from 'COMPONENTS/Register'
// import dateSchedule from 'COMPONENTS/DateSchedule'
import Schedule from 'COMPONENTS/Schedule'

Vue.use(Router)

const routes = [
  {
    path: '/a',
    component: Schedule,
    name: 'a'
  }
  // {
  //   path: '/d',
  //   component: register,
  //   name: 'd'
  // }
  // {
  //   path: '/d',
  //   component: PersonalSetting,
  //   name: 'd'
  // }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
