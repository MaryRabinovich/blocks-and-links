import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlockComponent from '../BlockComponent.vue'

describe('BlockComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(BlockComponent, {props: {block: 1}})
    expect(wrapper.classes()).toContain('block')
  })
})
