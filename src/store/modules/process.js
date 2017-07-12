/**
 * Created by xueyingchen.
 */
import { createTask } from 'API/taskApi.js'

const ID = 21

import { addNamespace, getList, getIndexByAttr } from '@/util/commonUtil'
const namespace = addNamespace('process')

export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const ADDPROCESS = namespace('ADDPROCESS')
export const CHANGEPROCESSNAME = namespace('CHANGEPROCESSNAME')

const getTaskItem = (id) => ({
  'id': 1,
  'name': 'asd',
  'content': 'sdfvx',
  'progressId': id,
  'state': true,
  'ddl': '2017-07-12T23:30:00',
  'emergencyType': 0
})

const progressList = [{
  id: 1,
  name: '准备开始',
  order: 1
}, {
  id: 2,
  name: '正在进行',
  order: 2
}]

function getProcess (tasks) {
  let result = {}
  tasks.forEach(item => {
    result[item.progressId] ? result[item.progressId].push(item) : result[item.progressId] = [item]
  })
  return progressList.map(item => Object.assign(item, {
    tasks: result[item.id]
  }))
}

function getRandomTask () {
  return getTaskItem((1.5 + Math.random()) | 0)
}

const state = {
  data: getProcess(getList(getRandomTask, 15))
}

const getters = {}

const actions = {
  [ADDTASK] ({state}, {id, name}) {
    const idx = getIndexByAttr(id, state.data, 'id')
    return createTask(name, ID, idx).then(item => {
      state.data[idx].tasks.push(item)
    })
  }
}

const mutations = {
  [DELETE] (state, index) {
    state.data.splice(index, 1)
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
  actions,
  mutations
}
