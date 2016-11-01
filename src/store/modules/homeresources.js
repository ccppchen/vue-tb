import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [types.HOME_RESOURCES] (state, { homeresource }) {
    state.all = homeresource
  },
}

export default {
  state,
  mutations
}
