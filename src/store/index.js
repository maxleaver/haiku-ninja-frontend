import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, state } from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
