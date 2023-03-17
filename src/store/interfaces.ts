import type { BlockElement, Link } from './types'

export interface State {
    blocks: number[]
    waitingBlockElement: BlockElement | null
    links: Link[]
}
