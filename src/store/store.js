import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchContent: '',
    searchContentAsync: '',
  },
  getters: {
    getSearchContent: state => {
      return state.searchContent
    },
    getSearchContentAsync: state => {
      return state.searchContentAsync
    },
  },
  mutations: {
    changeSearchContent: (state, newContent) => {
      state.searchContent = newContent
    },
    changeSearchContentAsync: (state, newContent) => {
      state.searchContentAsync = newContent
    }
  },
  actions: {
    // payload: could be WHATEVER data type (array, object, string, number, ...)
    //    in this case --> STRING
    changeSearchContent: ({commit}, payload) => {
      commit('changeSearchContent', payload)
    },
    changeSearchContentAsync: ({commit}, payload) => {
      setTimeout(() => {
        commit('changeSearchContentAsync', payload)
      }, 3000)
    },
  }
})