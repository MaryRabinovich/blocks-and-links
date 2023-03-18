import type { BlockElement, Link } from './types'
import type { LinksState } from './interfaces'
import { consoleSuccess, formatBlockElement } from './helpers'

export const links = {
    namespaced: true,
    state: (): LinksState => {
        return {
            waitingBlockElement: null,
            links: []
        }
    },
    getters: {
        getLinks: (state: LinksState) => {
            return state.links
        }
    },
    mutations: {
        link(state: LinksState, newBlockElement: BlockElement) {
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