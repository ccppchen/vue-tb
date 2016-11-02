import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import home from './modules/home';
import product from './modules/product';

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    product,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
