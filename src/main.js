// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios // 在vue原型链上使用Axios
Axios.defaults.baseURL = 'http://twy.blue-cube.cn:8108';

Vue.config.productionTip = false

import store from './store' // vuex-状态管理
// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// });
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});

let token = '456';
let userId = '123';
let mobile = '13550015593';
vm.$store.commit('AccessToken', token);
vm.$store.commit('UserId', userId);
vm.$store.commit('Mobile', mobile);
// vm.$mount("#app");
