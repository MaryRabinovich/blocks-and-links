export type Block = {
    id: number
    x: number
    y: number
}

export type BlockElement = {
    blockID: number
    blockElementID: number
}

export type Link = {
    first: BlockElement
    second: BlockElement
}
