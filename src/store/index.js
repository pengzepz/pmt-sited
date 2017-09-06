import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state, mutations, actions
  // strict: debug,
  // plugins: debug
  //   ? [createLogger()]
  //   : []
})
