/**
 * Created by xueyingchen.
 */

import { addNamespace, getList } from '@/util/commonUtil'
const namespace = addNamespace('process')

export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const ADDPROCESS = namespace('ADDPROCESS')
export const CHANGEPROCESSNAME = namespace('CHANGEPROCESSNAME')

const taskItem = {
  'taskId': 1,
  'name': 'asd',
  'content': 'sdfvx',
  'state': false,
  'executorId': 1,
  'memberId': [{
    'id': 1
  }],
  'progressId': 1,
  'emergency': 1,
  'comments': [],
  'files': [],
  'subtasks': [],
  'ddl': '2017-07-12T23:30:00'
}

const state = {
  data: [{
    title: '简单了解',
    tasks: getList(taskItem, 10)
  }, {
    title: '开始协作',
    tasks: getList(taskItem, 10)
  }]
}

const getters = {

}

const mutations = {
  [DELETE] (state, index) {
    state.data.splice(index, 1)
  },
  [ADDTASK] (state, index, title) {
    state.data[index][title] = title
  },
  [ADDPROCESS] (state, name) {
    state.data.push({
      title: name,
      tasks: []
    })
  },
  [CHANGEPROCESSNAME] (state, index, title) {
    state.data[index].title = title
  }
}

export default {
  state,
  getters,
  mutations
}
