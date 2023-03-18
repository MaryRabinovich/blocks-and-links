import { createStore } from 'vuex'
import { blocks } from './blocks'
import { links } from './links'

export const store = createStore({
    modules: {
        blocks: blocks,
        links: links
    },
})
