import Vue from 'vue'
import Router from 'vue-router'
// import project from 'PAGES/project'
// import recentIssues from 'COMPONENTS/RecentIssues'
// import recentIssueItem from 'COMPONENTS/RecentIssueItem'
// import mySchedule from 'COMPONENTS/MySchedule'
// import personalInformation from 'COMPONENTS/PersonalInformation'
// import selector from 'COMPONENTS/Selector'
import personalSetting from 'COMPONENTS/PersonalSetting'
// import avatar from 'COMPONENTS/Avatar'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: personalSetting
  }
]

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production'
})
