/**
 * Created by dustar on 2017/7/12.
 */

import {addNamespace} from '@/util/commonUtil'
import {getPersonList} from 'API/projectApi'
import {getAvatar} from 'API/userApi'

const namespace = addNamespace('user')

export const INITUSERDATA = namespace('INITUSERDATA')
export const INCREASE = namespace('INCREASE')
export const DOWN = namespace('DOWN')
export const RESET = namespace('RESET')
export const INVITE = namespace('INVITE')
export const FINISHINVITE = namespace('FINISHINVITE')
export const MADDMEMBERS = namespace('MADDMEMBERS')
export const GETAVATAR = namespace('GETAVATAR')
export const SETAVATAR = namespace('SETAVATAR')

const state = {
  avatar: null,
  users: [
    {
      'id': 4,
      'name': 'cuicui@cuicui.cn',
      'permission': 0
    },
    {
      'id': 1,
      'name': 'xt',
      'permission': 2
    },
    {
      'id': 99,
      'name': 'cuicui@cuicui.cn',
      'permission': 0
    },
    {
      'id': 33,
      'name': 'xt',
      'permission': 2
    },
    {
      'id': 77,
      'name': 'cuicui@cuicui.cn',
      'permission': 0
    },
    {
      'id': 44,
      'name': 'xt',
      'permission': 2
    }
  ],
  permissions: [
    {
      name: '创建者',
      value: 'owner'
    }, {
      name: '管理员',
      value: 'administrator'
    }, {

      name: '普通成员',
      value: 'member'
    }
  ]
}

const getters = {
  members: state => state.users,
  permissions: state => state.permissions,
  usersCount: state => state.users.length,
  permissionsCount: state => state.permissions.length
}

const mutations = {
  [FINISHINVITE] (state, user) {
    state.users.push(user)
  },
  [DOWN] (state) {
    state.count -= 1
  },
  [RESET] (state) {
    state.count = 0
  },
  [MADDMEMBERS] (state, items) {
    state.users = items
    // console.log(state.users)
  },
  [SETAVATAR] (state, avatar) {
    state.avatar = avatar
    console.log(avatar)
  }

}

const actions = {
  [INITUSERDATA] ({commit, state}, pId) {
    // console.log('initdata' + pId)
    return getPersonList(pId).then(({members}) => {
      commit(MADDMEMBERS, members)
      // state.members = members
    }).catch(err => console.log(err.message))
  },
  [INVITE] ({commit, state}, {pId, uId, email}) {
    // return addPerson(info, pId).then(({members}) => {
    //   commit(MADDMEMBERS, uid, members)
    //   // state.members = members
    // }).catch(err => console.log(err))
  },
  [GETAVATAR] ({commit}) {
    // return addPerson(info, pId).then(({members}) => {
    //   commit(MADDMEMBERS, uid, members)
    //   // state.members = members
    // }).catch(err => console.log(err))
    const uid = localStorage.getItem('token')
    getAvatar(uid).then(({ avatar }) => {
      commit(SETAVATAR, avatar)
    })
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}

