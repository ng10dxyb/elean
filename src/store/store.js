import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    isShow:true,
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    },
    updateTopStatus(state, payload) {
      state.isShow = payload.isShow
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('updateLoadingStatus', { isLoading: true })
    },
    stopLoading({ commit }) {
      commit('updateLoadingStatus', { isLoading: false })
    },
    topHide({ commit }) {
      commit('updateTopStatus', { isShow: false })
    },
    topShow({ commit }) {
      commit('updateTopStatus', { isShow: true })
    },
  }
})

export default store
