/**
 * Created by dustar on 2017/7/14.
 */
import {addNamespace} from '@/util/commonUtil'
import {listFiles} from 'API/fileApi'

const namespace = addNamespace('file')

export const INITFILES = namespace('INITFILES')
export const RENDERFILES = namespace('RENDERFILES')

const state = {
  files: [
    {
      'Id': 1,
      'Name': 'file',
      'UploadTime': '2017-07-13T21:23:20',
      'UserId': 1
    },
    {
      'Id': 2,
      'Name': 'file2',
      'UploadTime': '2017-07-13T21:23:20',
      'UserId': 1
    },
    {
      'Id': 3,
      'Name': 'file3',
      'UploadTime': '2017-07-13T21:23:20',
      'UserId': 1
    }
  ],
  types: ['.avi', '.pptx', '.zip', '.mp3', '.docx', '', '.jpg', '.html']
}

const getters = {}

const mutations = {
  [RENDERFILES] (state, data) {
    state.files = data
    for (let i = 0; i < state.files.length; i++) {
      state.files[i].t = state.types[parseInt(Math.random() * 8)]
    }
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
  [INITFILES] ({commit, state}, pId) {
    listFiles(pId).then(data => {
      commit(RENDERFILES, data)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
