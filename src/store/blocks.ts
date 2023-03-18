import type { Block } from './types'
import type { BlocksState } from './interfaces'

export const blocks = {
    namespaced: true,
    state: (): BlocksState => {
        return {
            blocks: []
        }
    },
    getters: {
        getBlocks (state: {blocks: Block[]}) {
            return state.blocks
        }
    },
    mutations: {
        addBlock (state: {blocks: Block[]}) {
            state.blocks.push({
                id: state.blocks.length,
                x: Math.floor(Math.random() * 100),
                y: Math.floor(Math.random() * 100)
            })
        }
    }
}
