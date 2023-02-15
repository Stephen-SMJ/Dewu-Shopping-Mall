import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        username: '',
        user_signature: ''
    },
    mutations: {

        setToken(state, token) {
            state.token = token
            localStorage.token = token
        },
        setUserInfo(state, data) {
            state.username = data[0]
            state.user_signature = data[1]
            localStorage.username = data[0]
            localStorage.user_signature = data[1]
        }
    },
    getters: {
        getToken(state) {
            if (!state.token) {
                state.token = localStorage.getItem('token')
            }
            return state.token
        }
    },
    actions: {}
})
