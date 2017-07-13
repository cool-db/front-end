/**
 * Created by xueyingchen.
 */

import Vital from '@/assets/icons/new_item/priority-vital.png'
import Emer from '@/assets/icons/new_item/priority-emergent.png'
import Easy from '@/assets/icons/new_item/priority-easy.png'

import {addNamespace} from '@/util/commonUtil'
const namespace = addNamespace('task')

export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const INITTASK = namespace('INITTASK')
export const ADDMEMBER = namespace('ADDMEMBER')
export const SAVETASK = namespace('SAVETASK')
export const SHOWTASKMODAL = namespace('SHOWTASKMODAL')
export const HIDETASKMODAL = namespace('HIDETASKMODAL')

const state = {
  show: false,
  task: {
    'taskId': 1,
    'name': '苟利国家生死以',
    'content': '苟富贵勿相忘',
    'state': false,
    'executorId': 1,
    'memberId': [{
      'id': 1,
      'name': '王昌龄',
      'avatar': null
    }, {
      'id': 2,
      'name': '谢天谢地',
      'avatar': null
    }, {
      'id': 3,
      'name': '鞋底',
      'avatar': null
    }],
    'progressId': 1,
    'emergency': 1,
    'comments': [],
    'files': [],
    'subtasks': [],
    'repeat': 0,
    'ddl': '2017-07-12T23:30:00'
  },
  repeats: ['不重复', '每天重复', '每周重复', '每月重复', '每年重复'],
  emers: [
    {icon: Easy, title: '普通'},
    {icon: Emer, title: '紧急'},
    {icon: Vital, title: '非常紧急'}
  ]
}

const getters = {
  task: state => state.task,
  repeats: state => state.repeats,
  emers: state => state.emers,
  modalshow: state => state.show
}

const mutations = {
  // [CHANGESTATE] (state, checked) {
  //   state.task.state = checked
  // },
  // [CHANGENAME] (state, name) {
  //   state.task.name = name
  // },
  // [CHANGECONTENT] (state, content) {
  //   state.task.content = content
  // },
  // [CHANGEEXECUTOR] (state, id) {
  //   state.task.executorId = id
  // },
  // [CHANGEEMER] (state, emer) {
  //   state.task.emergency = emer
  // },
  // [ADDCOMMENT] (state, comment) {
  //   state.task.comment.push(comment)
  // },
  // [ADDFILE] (state, id) {
  //   state.task.files.push(id)
  // },
  // [DELETEFILE] (state, index) {
  //   state.task.files.splice(index, 1)
  // },
  // [CHANGEREPEAT] (state, repeat) {
  //   state.task.repeat = repeat
  // },
  // [CHANGEDDL] (state, ddl) {
  //   state.task.ddl = ddl
  // },
  [SHOWTASKMODAL] (state) {
    state.show = true
  },
  [HIDETASKMODAL] (state) {
    state.show = false
  }
}

const actions = {
  [ADDMEMBER] (state, id) {
    state.task.memberId.push(id)
  },
  [INITTASK] (state) {

  },
  [SAVETASK] (state) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
/**
 * Created by dustar on 2017/7/13.
 */
