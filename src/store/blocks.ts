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
            const x: number = payload.event.pageX ?? 0
            const y: number = payload.event.pageY ?? 0

            const block: Block | undefined = state.blocks.find(
                block => block.id === payload.blockID
            )

            if (!block) return

            if (x > 0) block.x = x
            if (y > 0) block.y = y
        }
    }
}
