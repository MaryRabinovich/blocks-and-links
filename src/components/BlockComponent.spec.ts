import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import BlockComponent from './BlockComponent.vue'

describe('BlockComponent', () => {

    const props = {blockID: 0}

    const getters = {getBlocks: vi.fn()}
    const blocks = {getters, namespaced: true}
    getters.getBlocks.mockReturnValue([{x: 0, y: 0}])

    it('renders properly', () => {
        const mock = createStore({modules: {blocks}})
        const wrapper = mount(BlockComponent, {props, global: {plugins: [mock]}})
        expect(wrapper.classes()).toContain('block')
    })
    
    it('calls for store link function when block-elements are clicked', () => {
        const mutations = {link: vi.fn()}
        const links = {mutations, namespaced: true}
        const mock = createStore({modules: {blocks, links}})
        const wrapper = mount(BlockComponent, {props, global: {plugins: [mock]}})
        const blockElement = wrapper.find('.block__element')
        blockElement.trigger('click')
        expect(mutations.link).toHaveBeenCalled()
    })
})
