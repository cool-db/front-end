const namespace = 'hello'

const INCREASE = `${namespace}/INCREASE`
const DOWN = `${namespace}/DOWN`
const RESET = `${namespace}/RESET`

const state = {
  count: 0
}

const getters = {
  count: state => state.count
}

const mutations = {
  [INCREASE] (state) {
    state.count += 1
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
  mutations
}

