/**
 * Created by xueyingchen.
 */
import { createTask, getTaskList, updateState, updateTaskOrder, getRecentTask } from 'API/taskApi'
import { listProgress, createProgress, delProgress } from 'API/projectApi'

import { addNamespace, getIndexByAttr, extractItem } from '@/util/commonUtil'
const namespace = addNamespace('process')

export const INITDATA = namespace('INITDATA')
export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const ADDPROCESS = namespace('ADDPROCESS')
export const CHANGEPROCESSNAME = namespace('CHANGEPROCESSNAME')
export const DELETEPROCESS = namespace('DELETEPROCESS')
export const CHANGETASKSTATE = namespace('CHANGETASKSTATE')
export const ASNYCCHANGETASKORDER = namespace('ASNYCCHANGETASKORDER')

export const INITRECENTDATA = namespace('INITRECENTDATA')
export const COMMITRECENTDATA = namespace('COMMITRECENTDATA')
export const MINITRECENTDATA = namespace('MINITRECENTDATA')
const MADDTASK = namespace('MADDTASK')
const MINITDATA = namespace('MINITDATA')
const MCHANGETASKSTATE = namespace('CHANGETASKSTATE')
export const CHANGETASKORDER = namespace('CHANGETASKORDER')

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
  data: [],
  recent: []
}

const getters = {}

const actions = {
  [ADDTASK] ({commit, state}, {uid, pid, name}) {
    const idx = getIndexByAttr(pid, state.data, 'id')
    return createTask(name, uid, pid).then(item => {
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
  [INITRECENTDATA] ({commit}) {
    const uid = localStorage.getItem('token')
    getRecentTask(uid)
      .then(({recentTask}) => {
        commit(MINITRECENTDATA, recentTask)
      })
  },
  [ADDPROCESS] ({commit}, {pName, pid, uid}) {
    return createProgress(pName, pid, uid)
  },
  [DELETEPROCESS] ({commit}, {pid, uid}) {
    return delProgress(pid, uid)
  },
  [CHANGETASKSTATE] ({commit}, {taskId, userId, checked, pIndex, tIndex}) {
    return updateState(taskId, userId, checked)
      .then(_ => commit(MCHANGETASKSTATE, {pIndex, tIndex, checked}))
  },
  [ASNYCCHANGETASKORDER] ({state, commit}, {userId, index, value}) {
    const process = state.data[index]
    if (process.tasks.length < value.length) {
      const taskId = extractItem(process.tasks, value)
      commit(CHANGETASKORDER, {index, value})
      return updateTaskOrder(taskId, userId, process.id)
    }
    commit(CHANGETASKORDER, {index, value})
  }
}

const mutations = {
  [COMMITRECENTDATA] (state, data) {
    state.recent = data
  },
  [DELETE] (state, index) {
    state.data.splice(index, 1)
  },
  [CHANGEPROCESSNAME] (state, index, name) {
    state.data[index].name = name
  },
  [MINITDATA] (state, data) {
    state.data = data
  },
  [MADDTASK] (state, {index, task}) {
    state.data[index].tasks.push(task)
  },
  [CHANGETASKORDER] (state, {index, value}) {
    state.data[index].tasks = value
  },
  [MCHANGETASKSTATE] (state, {pIndex, tIndex, checked}) {
    state.data[pIndex].tasks[tIndex].state = checked
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
