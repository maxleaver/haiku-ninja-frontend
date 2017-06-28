import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import vuexI18n from 'vuex-i18n'
import { mutations, state } from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import langEn from 'src/lang/en'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})

Vue.use(vuexI18n.plugin, store)

// add translations to the application
Vue.i18n.add('en', langEn)

// set the start locale to use
Vue.i18n.set('en')

export default store
