import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import BlockComponent from './BlockComponent.vue'

describe('BlockComponent', () => {
    const props = {blockID: 0}

    const simplestReturn = function() {return {x: 0, y: 0}}
    const getters = {getBlockByID: vi.fn()}
    getters.getBlockByID.mockReturnValue(simplestReturn)
    const blocks = {getters, namespaced: true}

    it('renders properly', () => {
        const mock = createStore({modules: {blocks}})
        const wrapper = mount(BlockComponent, {props, global: {plugins: [mock]}})
        expect(wrapper.classes()).contains('block')
        const block = wrapper.find('.block')
        expect(block.html()).contains('style')
        expect(block.html().match(/block__element/g)?.length).equals(4)
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
