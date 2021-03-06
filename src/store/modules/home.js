import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [types.RECEIVE_HOMES] (state, { response }) {
    state.all = response.body
  }
}

export default {
  state,
  mutations
}
