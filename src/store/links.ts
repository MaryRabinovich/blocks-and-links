import type { BlockElement, Link } from './types'
import type { LinkState } from './interfaces'
import { consoleSuccess, formatBlockElement } from './console-logging'

export const links = {
    namespaced: true,
    state: (): LinkState => {
        return {
            waitingBlockElement: null,
            links: []
        }
    },
    mutations: {
        link(state: LinkState, newBlockElement: BlockElement) {
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
}