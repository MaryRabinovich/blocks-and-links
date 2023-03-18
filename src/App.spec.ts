import { it, describe, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { store } from './store/index'
import App from './App.vue'

describe('App', () => {
    it('it renders the AddBlocks button', () => {
        const wrapper = mount(App, {global: {plugins: [store]}})
        expect(wrapper.text()).toContain('Add Block')
    }),
    it('AddBlocks button triggers the addBlock function in the store', () => {
        const mutations = {
            addBlock: vi.fn()
        }
        const blocks = {
            namespaced: true,
            mutations
        }
        const mock = createStore({
            modules: {blocks}
        })
        const wrapper = mount(App, {
            global: {plugins: [mock]}
        })
        wrapper.find('button').trigger('click')
        expect(mutations.addBlock).toHaveBeenCalled()
    })
})
