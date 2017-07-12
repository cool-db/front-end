/**
 * Created by xueyingchen.
 */

import { addNamespace } from '@/util/commonUtil'
const namespace = addNamespace('process')

export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const ADDPROCESS = namespace('ADDPROCESS')
export const CHANGEPROCESSNAME = namespace('CHANGEPROCESSNAME')

const state = {
  data: [{
    title: '简单了解',
    tasks: ['↓点击蓝色按钮，添加任务', '√ 点击左侧方框，完成任务', '→ 点按拖动任务至右边的阶段']
  }, {
    title: '开始协作',
    tasks: ['点击查看这条任务女屌丝', '② 将自己的同伴添加到项目中', '管理项目中的应用', '满足企业管理统计需求']
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
