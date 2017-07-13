/**
 * Created by xueyingchen.
 */
import { createTask, getTaskList } from 'API/taskApi'
import { listProgress, createProgress } from 'API/projectApi'

const userId = 21

import { addNamespace, getIndexByAttr } from '@/util/commonUtil'
const namespace = addNamespace('process')

export const INITDATA = namespace('INITDATA')
export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const ADDPROCESS = namespace('ADDPROCESS')
export const CHANGEPROCESSNAME = namespace('CHANGEPROCESSNAME')

const MINITDATA = namespace('MINITDATA')
const MADDTASK = namespace('MADDTASK')

function getProcess (tasks, processes) {
  let result = {}
  processes.forEach(item => {
    result[item.id] = []
  })
  tasks.forEach(item => result[item.progressId].push(item))
  return processes.map(item => Object.assign(item, {
    tasks: result[item.id]
  }))
}

const state = {
  data: []
}

const getters = {}

const actions = {
  [ADDTASK] ({commit, state}, {id, name}) {
    const idx = getIndexByAttr(id, state.data, 'id')
    return createTask(name, userId, id).then(item => {
      commit(MADDTASK, {index: idx, task: item})
    })
  },
  [INITDATA] ({commit}, {pId}) {
    const processList = listProgress(pId)
    const taskList = getTaskList(pId)
    return Promise.all([processList, taskList])
      .then(([{progressList}, {tasks}]) => {
        commit(MINITDATA, getProcess(tasks, progressList))
      })
  },
  [ADDPROCESS] ({commit}, {pName, pid, uid}) {
    return createProgress(pName, pid, uid)
  }
}

const mutations = {
  [DELETE] (state, index) {
    state.data.splice(index, 1)
  },
  [CHANGEPROCESSNAME] (state, index, title) {
    state.data[index].title = title
  },
  [MINITDATA] (state, data) {
    state.data = data
  },
  [MADDTASK] (state, {index, task}) {
    state.data[index].tasks.push(task)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
