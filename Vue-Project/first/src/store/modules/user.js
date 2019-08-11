
const types = {
    SET_USER_LIST: 'SET_USER_LIST',
    SET_TOLIST: 'SET_TOLIST'
}
const user = {
    state: {
        users: [],
        toList: []
    },
    getters: {
        users: state => state.users,
        toList: state => state.toList
    },
    mutations: {
        [types.SET_USER_LIST]: (state, list) => {
            state.users = list
        },
        [types.SET_TOLIST]: (state, list) => {
            state.toList = list
        }
    },
    actions: {
        [types.SET_USER_LIST]: ({ commit }, list) => {
            commit(types.SET_USER_LIST, list)
        },
        [types.SET_TOLIST]: ({ commit, state }, item) => {
            let list = [...state.toList]
            list.unshift(item)
            commit(types.SET_TOLIST, list)
        }
    }
}

export default user