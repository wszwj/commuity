import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT (state) {
      state.counter ++
    },
    RESET (state) {
      state.counter = 0
    }
  },
  strict: true
})

export default store
