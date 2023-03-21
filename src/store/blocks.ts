import { BLOCK_START_X, BLOCK_START_Y } from '../config'
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
        getBlocks (state: BlocksState) {
            return state.blocks
        },
        getBlockByID(state: BlocksState) {
            return (blockID: number) => {
                return state.blocks.find(block => block.id === blockID)
            }
        }
    },
    mutations: {
        addBlock (state: BlocksState) {
            state.blocks.push({
                id: state.blocks.length,
                x: BLOCK_START_X,
                y: BLOCK_START_Y
            })
        },
        setPosition (state: BlocksState, payload: {
            blockID: number
            event: Event
        }) {
            if (payload.event.pageX > 0) {
                state.blocks[payload.blockID].x = payload.event.pageX
            }
            if (payload.event.pageY > 0) {
                state.blocks[payload.blockID].y = payload.event.pageY
            }
        }
    }
}
