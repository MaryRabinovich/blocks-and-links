export const blocks = {
    namespaced: true,
    state: (): {
        blocks: number[]
    }  => {
        return {
            blocks: []
        }
    },
    getters: {
        getBlocks (state: {blocks: number[]}) {
            return state.blocks
        }
    },
    mutations: {
        addBlock (state: {blocks: number[]}) {
            state.blocks.push(state.blocks.length)
        }
    }
}
