import Vue from 'vue'
import Router from 'vue-router'
// import project from 'PAGES/project'
// import file from 'COMPONENTS/File'
// import fileItem from 'COMPONENTS/FileItem'
// import accountPassword from 'COMPONENTS/AccountPassword'
// import avatar from 'COMPONENTS/Avatar'
// import personalInfomation from 'COMPONENTS/PersonalInfomation'
// import Selector from 'COMPONENTS/Selector'
import PersonalSetting from 'COMPONENTS/PersonalSetting'
import login from 'COMPONENTS/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/d',
    component: PersonalSetting,
    name: 'd'
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
