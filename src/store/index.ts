import { createStore } from 'vuex'

interface State {
    blocks: number[];
}

export const store = createStore<State>({
    state () {
        return {
            blocks: []
        }
    },
    getters: {
        getBlocks(state) {
            return state.blocks
        }
    },
    mutations: {
        addBlock(state) {
            state.blocks.push(state.blocks.length)
            console.log(state.blocks)
        },
    }
})
