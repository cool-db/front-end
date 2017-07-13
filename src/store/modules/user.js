/**
 * Created by dustar on 2017/7/12.
 */

import { addNamespace } from '@/util/commonUtil'
const namespace = addNamespace('user')

export const INCREASE = namespace('INCREASE')
export const DOWN = namespace('DOWN')
export const RESET = namespace('RESET')
export const INVITE = namespace('INVITE')

const state = {
  members: [
    {
      name: '西蒙',
      avatar: null,
      email: '381029382@qq.com',
      permission: 0
    }, {
      name: '西门子',
      avatar: null,
      email: '777729382@qq.com',
      permission: 0
    }, {
      name: '谢地',
      avatar: null,
      email: '444449382@qq.com',
      permission: 0
    }, {
      name: 'Andi Obama',
      avatar: null,
      email: '19922382@qq.com',
      permission: 1
    }
  ],
  permissions: [
    {
      name: '成员',
      value: 'member'
    }, {
      name: '管理员',
      value: 'owner'
    }
  ]
}

const getters = {
  members: state => state.members,
  permissions: state => state.permissions,
  usersCount: state => state.members.length,
  permissionsCount: state => state.permissions.length
}

const actions = {
  asyncIncrease ({commit}) {
    setTimeout(() => {
      commit(INCREASE, 5)
    }, 1000)
  }
}

const mutations = {
  [INVITE] (state, user) {
    state.members.push(user)
  },
  [DOWN] (state) {
    state.count -= 1
  },
  [RESET] (state) {
    state.count = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

