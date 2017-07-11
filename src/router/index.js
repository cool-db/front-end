import Vue from 'vue'
import Router from 'vue-router'
// import project from 'PAGES/project'
import recentIssues from 'COMPONENTS/RecentIssues'
// import recentIssueItem from 'COMPONENTS/RecentIssueItem'
// import mySchedule from 'COMPONENTS/MySchedule'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: recentIssues
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
