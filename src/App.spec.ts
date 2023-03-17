import {it, describe, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
    it('renders properly', () => {
        const wrapper = mount(App, {})
        expect(wrapper.html()).toContain('<div>')
    })
})