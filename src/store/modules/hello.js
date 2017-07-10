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

const actions = {
  asyncIncrease ({commit}) {
    setTimeout(() => {
      commit(INCREASE, 5)
    }, 1000)
  }
}

const mutations = {
  [INCREASE] (state, data) {
    state.count += data
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

