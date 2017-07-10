import Vue from 'vue'
import Router from 'vue-router'
// import project from 'PAGES/project'
import file from 'COMPONENTS/File'
// import fileItem from 'COMPONENTS/FileItem'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: file
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
