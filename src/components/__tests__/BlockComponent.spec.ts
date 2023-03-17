import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import BlockComponent from '../BlockComponent.vue'

describe('BlockComponent', () => {
    it('renders properly', () => {
        const wrapper = mount(BlockComponent, {props: {block: 1}})
        expect(wrapper.classes()).toContain('block')
    }),
    it('calls for store link function when block-elements are clicked', () => {
        const mutations = {
            link: vi.fn()
        }
        const mock = createStore({
            mutations: mutations
        })
        const wrapper = mount(BlockComponent, {
            props: {block: 1}, 
            global: {plugins: [mock]}
        })
        const blockElement = wrapper.find('.block__element')
        blockElement.trigger('click')
        expect(mutations.link).toHaveBeenCalled()
    })
})
