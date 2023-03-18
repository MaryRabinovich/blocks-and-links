import type { BlockElement } from "./types"

export function formatBlockElement(blockElement: BlockElement) {
    return `${blockElement.blockID}-${blockElement.blockElementID}`
}

export function consoleSuccess(message: string) {
    console.log("%c" + message, "color: green; font-weight: bold;")
}
