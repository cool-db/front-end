/**
 * Created by xueyingchen.
 */

import { addNamespace } from '@/util/commonUtil'
const namespace = addNamespace('task')

export const DELETE = namespace('DELETE')
export const ADDTASK = namespace('ADDTASK')
export const RESET = namespace('RESET')
export const ADDMEMBER = namespace('ADDMEMBER')
export const CHANGESTATE = namespace('CHANGESTATE')
export const CHANGENAME = namespace('CHANGENAME')
export const CHANGECONTENT = namespace('CHANGECONTENT')
export const CHANGEEXECUTOR = namespace('CHANGEEXECUTOR')
export const CHANGEEMER = namespace('CHANGEEMER')
export const ADDCOMMENT = namespace('ADDCOMMENT')
export const ADDFILE = namespace('ADDFILE')
export const DELETEFILE = namespace('DELETEFILE')
export const CHANGEREPEAT = namespace('CHANGEREPEAT')
export const CHANGEDDL = namespace('CHANGEDDL')
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
      'id': 1
    }, {
      'id': 2
    }, {
      'id': 3
    }],
    'progressId': 1,
    'emergency': 1,
    'comments': [],
    'files': [],
    'subtasks': [],
    'repeat': 0,
    'ddl': '2017-07-12T23:30:00'
  }
}

const getters = {
  taskitem: state => state.task,
  taskid: state => state.task.taskId,
  taskname: state => state.task.name,
  taskcontent: state => state.task.content,
  taskstate: state => state.task.state,
  taskmembercount: state => state.task.memberId.length,
  modalshow: state => state.show,
  taskmembers: state => state.task.memberId,
  taskexecutor: state => state.task.executorId,
  taskprogress: state => state.task.progressId,
  taskemergency: state => state.task.emergency,
  taskfiles: state => state.task.files,
  taskrepeat: state => state.task.repeat,
  taskddl: state => state.task.ddl
}

const mutations = {
  [ADDMEMBER] (state, id) {
    state.task.memberId.push(id)
  },
  [CHANGESTATE] (state, checked) {
    state.task.state = checked
  },
  [CHANGENAME] (state, name) {
    state.task.name = name
  },
  [CHANGECONTENT] (state, content) {
    state.task.content = content
  },
  [CHANGEEXECUTOR] (state, id) {
    state.task.executorId = id
  },
  [CHANGEEMER] (state, emer) {
    state.task.emergency = emer
  },
  [ADDCOMMENT] (state, comment) {
    state.task.comment.push(comment)
  },
  [ADDFILE] (state, id) {
    state.task.files.push(id)
  },
  [DELETEFILE] (state, index) {
    state.task.files.splice(index, 1)
  },
  [CHANGEREPEAT] (state, repeat) {
    state.task.repeat = repeat
  },
  [CHANGEDDL] (state, ddl) {
    state.task.ddl = ddl
  },
  [SHOWTASKMODAL] (state) {
    state.show = true
  },
  [HIDETASKMODAL] (state) {
    state.show = false
  }
}

export default {
  state,
  getters,
  mutations
}
/**
 * Created by dustar on 2017/7/13.
 */
