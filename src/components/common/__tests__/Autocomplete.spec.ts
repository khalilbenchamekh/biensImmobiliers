import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AutocompleteComponent from '../Autocomplete.vue'

describe('AssetSearch', () => {
  it('renders properly', () => {
    const wrapper = mount(AutocompleteComponent, { props: { value: {} } })
    expect(wrapper.find('#autocomplete').exists()).toBe(true)
    expect(wrapper.find('#search').exists()).toBe(true)
  })
})
