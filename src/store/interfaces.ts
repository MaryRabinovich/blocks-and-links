import type { Block, BlockElement, Link } from './types'

export interface BlocksState {
    blocks: Block[]
}

export interface LinksState {
    waitingBlockElement: BlockElement | null
    links: Link[]
}
