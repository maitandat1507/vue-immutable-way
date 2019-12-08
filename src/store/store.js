import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchContent: ''
  },
  getters: {
    getSearchContent: state => {
      return state.searchContent
    },
  },
  mutations: {
    changeSearchContent: (state, newContent) => {
      state.searchContent = newContent
    }
  },
})