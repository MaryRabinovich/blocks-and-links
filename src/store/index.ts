import { createStore } from 'vuex'
import type { BlockElement, Link } from './types'
import type { State } from './interfaces'
import { consoleSuccess, formatBlockElement } from './console-logging'

export const store = createStore<State>({
    state () {
        return {
            blocks: [],
            waitingBlockElement: null,
            links: []
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
        },
        link(state: State, newBlockElement: BlockElement) {
            if (state.waitingBlockElement === null) {
                state.waitingBlockElement = newBlockElement
                consoleSuccess(formatBlockElement(newBlockElement) + ' (chosen)')
                return
            }
            if (state.waitingBlockElement.blockID === newBlockElement.blockID) {
                console.error('when you click twice on the same block, the choice is dropped')
                state.waitingBlockElement = null
                return
            }
            const newLink: Link = {
                first: state.waitingBlockElement,
                second: newBlockElement
            }
            state.links.push(newLink)
            state.waitingBlockElement = null

            consoleSuccess(formatBlockElement(newLink.first) + ' (linked to) ' + formatBlockElement(newLink.second))
        }
    }
})
