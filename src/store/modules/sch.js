/**
 * Created by dustar on 2017/7/14.
 */
import {addNamespace} from '@/util/commonUtil'
import {listSches} from 'API/scheApi'

const namespace = addNamespace('sch')

export const INITSCHS = namespace('INITSCHS')
export const RENDERSCHS = namespace('RENDERSCHS')

const state = {
  items: [
    {
      'scheduleId': 121,
      'scheduleName': '开会',
      'startTime': '2017-07-05T08:17:38',
      'endTime': '2017-07-05T09:17:50',
      'repeatDaily': false,
      'repeatWeekly': true
    },
    {
      'scheduleId': 122,
      'scheduleName': '订外卖',
      'startTime': '2017-07-05T08:17:38',
      'endTime': '2017-07-05T09:17:50',
      'repeatDaily': true,
      'repeatWeekly': false
    },
    {
      'scheduleId': 166,
      'scheduleName': '重要成员开例会',
      'startTime': '2017-07-09T08:17:38',
      'endTime': '2017-07-09T09:17:50',
      'repeatDaily': false,
      'repeatWeekly': true
    }

  ],
  types: ['.avi', '.pptx', '.zip', '.mp3', '.docx', '', '.jpg', '.html']
}

const getters = {}

const mutations = {
  [RENDERSCHS] (state, data) {
    state.items = data.scheduleList
    // for (let i = 0; i < state.files.length; i++) {
    //   state.files[i].t = state.types[parseInt(Math.random() * 8)]
    // }
  }
}

const actions = {
  // [ADDFILES] ({commit, state}, pId) {
  //   // console.log('initdata' + pId)
  //   return getPersonList(pId).then(({members}) => {
  //     commit(MADDMEMBERS, members)
  //     // state.members = members
  //   }).catch(err => console.log(err))
  // },
  [INITSCHS] ({commit, state}, pId) {
    listSches(pId).then(data => {
      commit(RENDERSCHS, data)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
/**
 * Created by dustar on 2017/7/14.
 */
