import Vue from 'vue'
import Vuex from 'vuex'
import { AccessToken, UserId, Mobile} from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AccessToken: '',
    UserId: '',
    Mobile: '',
    loadingShow:false // 加载中是够显示
  },
  mutations: {
    [AccessToken](state, n) {
      state.AccessToken = n;
    },
    [UserId](state, n) {
      state.UserId = n;
    },
    [Mobile](state, n) {
      state.Mobile = n;
    },
    firstData(state) {
      console.log(state.Mobile+'aaaa');
    },
    secondData(state){
      console.log(state.Mobile+'bbbb');
    }
  },
  actions: {
    thirdData({commit}) {
      setTimeout(function () {
        commit('secondData')
      },2000)
    }
  },
  getters: {
    mobileNum(state) {
        console.log(state.Mobile)
    }
  }
})
