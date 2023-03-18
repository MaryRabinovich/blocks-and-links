import type { BlockElement, Link } from './types'

export interface LinkState {
    waitingBlockElement: BlockElement | null
    links: Link[]
}
