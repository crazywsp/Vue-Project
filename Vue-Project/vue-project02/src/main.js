// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)


/*let store = new Vuex.Store({
    state: {
        totalPrice : 0
    },
    mutations: {
      increment (state, price) {
        state.totalPrice += price
      },
      decrement (state, price) {
        state.totalPrice -= price
      }
    }
})*/

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        component: IndexPage
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
