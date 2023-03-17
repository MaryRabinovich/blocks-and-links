import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        add(state, n) {
            state.counter += n
        }
    }
})
