import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import LinksComponent from './LinksComponent.vue'

describe('LinksComponent', () => {
    const blocksGetters = {getBlocks: vi.fn()}
    blocksGetters.getBlocks.mockReturnValue([{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}])
    const blocks = {getters: blocksGetters, namespaced: true}

    const linksGetters = {getLinks: vi.fn()}
    const links = {getters: linksGetters, namespaced: true}
    linksGetters.getLinks.mockReturnValue([])

    it('renders the svg tag', () => {
        const mock = createStore({modules: {links}})
        const wrapper = mount(LinksComponent, {global: {plugins: [mock]}})
        expect(wrapper.html()).contains('svg')
    })

    it ('renders no lines when store returns no links', () => {
        const mock = createStore({modules: {links}})
        const wrapper = mount(LinksComponent, {global: {plugins: [mock]}})
        expect(wrapper.html()).not.contains('path')
    })

    it ('renders one line properly', () => {
        linksGetters.getLinks.mockReturnValue([
            {first: {blockID: 0, blockElement: 0}, second: {blockID: 1, blockElement: 1}}
        ])
        const mock = createStore({modules: {links, blocks}})
        const wrapper = mount(LinksComponent, {global: {plugins: [mock]}})
        expect(wrapper.html()).contains('M 0 0 1 1')
    })

    it ('renders one line per link', () => {
        linksGetters.getLinks.mockReturnValue([
            {first: {blockID: 0, blockElement: 0}, second: {blockID: 1, blockElement: 1}},
            {first: {blockID: 0, blockElement: 0}, second: {blockID: 1, blockElement: 2}},
            {first: {blockID: 1, blockElement: 3}, second: {blockID: 2, blockElement: 2}},
        ])
        const mock = createStore({modules: {links, blocks}})
        const wrapper = mount(LinksComponent, {global: {plugins: [mock]}})
        expect(wrapper.html().match(/path/g)?.length).equals(6)
    })
})