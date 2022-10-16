import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AssetSearchComponent from '../AssetSearch.vue'

describe('AssetSearch', () => {
  it('renders properly', () => {
    const wrapper = mount(AssetSearchComponent, { props: { options: [] } })
    expect(wrapper.find('#asset-search').exists()).toBe(true)
    expect(wrapper.find('#asset-search-text').exists()).toBe(true)
    expect(wrapper.find('#asset-search-autocomplete').exists()).toBe(true)
    expect(wrapper.find('#asset-search-button').exists()).toBe(true)
  })
  it('renders emits search on button click', async () => {
    const wrapper = mount(AssetSearchComponent, { props: { options: [] } })
    await wrapper.find('#asset-search-button').trigger('click')
    expect(wrapper.emitted().search).toBeTruthy()
  })
})
