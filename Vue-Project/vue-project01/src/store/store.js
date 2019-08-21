import Vue from 'vue'
import Vuex from 'vuex'
// 引用vuex
Vue.use(Vuex)

const state = {
    count: 42
}

const getters = {
    count: state => {
        return state.count += 0
    }
    /* 等同于如下代码: */
    /* count: function(state) {
        return state.count += 1000
    } */
}

// mutations类似于事件，对状态进行更改，调用方式: $store.commit('add')
const mutations = {
    add(state, obj) {
        state.count += obj.number1
    },
    reduce(state) {
        state.count --
    }
}

const actions = {
    /* 异步操作，先进行add操作，两秒后进行reduce操作 */
    addPlus (context) {
        context.commit('add', { number1: 1});
        setTimeout(() => {
            context.commit('reduce')
        }, 2000)
        console.log('执行')
    },
    reducePlus ({commit}) {
        commit('reduce')
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

const moduleB = {
    state: { countB: 30 }
}

export default new Vuex.Store({
    modules: {
        aModule: moduleA,
        bModule: moduleB
    }
})