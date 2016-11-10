import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  current: [],
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { response }) {
    state.all = state.all.concat(response.body)
  },

  [types.CURRENT_PRODUCTS] (state, { response }) {
    state.current = response.body
  }
}

export default {
  state,
  mutations
}
