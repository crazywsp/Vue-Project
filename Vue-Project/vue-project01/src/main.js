import Vue from 'vue'
import router from './router'
import vuex from './components/vuex.vue'
import store from './store/store'

//引入store.js文件和vuex.vue模板文件

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(vuex),

})

/* new Vue({
    el: '#app',
    router,
    render: h => h(App),

}) */

