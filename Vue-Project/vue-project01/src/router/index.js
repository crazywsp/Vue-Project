import Vue from 'vue'
import Router from 'vue-router'
// import Vuex from 'vuex'

// Vue.use(Vuex)
Vue.use(Router)

const Home = {
    template: `
        <div>
            <h2>home</h2>
            <p>Tiis is home.</p>
        </div>
    `
}
const Page404 = {
    template: `
        <div>
            <h2>This is 404.</h2>
        </div>
    `
}
const parent = {
    template: `
        <div>
            <h2>parent</h2>
            <p>Tiis is parent.</p>
        </div>
    `
}
const parent1 = {
    template: `
        <div>
            <h2>parent1</h2>
            <p>Tiis is parent.</p>
        </div>
    `
}
//cmp/HelloWorld
const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: ()=>import('cmp/HelloWorld') },
        { path: '/parent', component: parent,
            beforeEnter: (to, from, next) => {
                // next('/parent1')  --等同于下面代码：点击'/parent'会跳转到'/parent1'路由
                // next({ path: 'parent1' })
                next()
            }
        },
        { path: '/parent1', component: parent1  },
        { path: '/*', component: Page404  }
    ]
})

/* const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
}) */

export default router

