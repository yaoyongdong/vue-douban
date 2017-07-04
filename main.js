import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
Vue.use(VueRouter);
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: { isMarked: false },
  mutations: { markOn: function(state) { state.isMarked = false; }, markOff: function(state) { state.isMarked = true } }
})

import routes from './router.js';
const router = new VueRouter({
    routes
  })
  //引入模板,jsonp方法
import components from './component.js';
import methods from './method.js';
Object.keys(components).forEach(k => {
  Vue.component(k, components[k]);
})
Object.keys(methods).forEach(k => {
  Vue.prototype[k] = methods[k];
})


console.log(Vue.methods);
new Vue({
  el: "#app",
  router,
  store,
  render: c => c(App)
})