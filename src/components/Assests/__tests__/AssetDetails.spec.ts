import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AssetDetailsComponent from '../AssetDetails.vue'

describe('AssetSearch', () => {
  it('renders properly', () => {
    const wrapper = mount(AssetDetailsComponent, { props: { value: {} } })
    expect(wrapper.find('#asset-details').exists()).toBe(true)
    expect(wrapper.find('#asset-details-address').exists()).toBe(true)
    expect(wrapper.find('#asset-details-city').exists()).toBe(true)
    expect(wrapper.find('#asset-details-type').exists()).toBe(true)
    expect(wrapper.find('#asset-details-description').exists()).toBe(true)
    expect(wrapper.find('#asset-details-price').exists()).toBe(true)
    expect(wrapper.find('#asset-details-image').exists()).toBe(true)
  })
  it('renders the right data', async () => {
    const details = {
      address_line1 : 'address_line1',
      ville : 'ville',
      type : 'type',
      prix : 0,
      unit : 'unit',
      photo : 'photo',
      description: 'desc'
    }
    const wrapper = mount(AssetDetailsComponent, { props: { value: details } })
    expect(wrapper.find('#asset-details-address').text()).toMatch('Addresse : '+ details.address_line1)
    expect(wrapper.find('#asset-details-city').text()).toMatch('Ville : '+ details.ville)
    expect(wrapper.find('#asset-details-type').text()).toMatch('Type : '+ details.type)
    expect(wrapper.find('#asset-details-description').text()).toMatch('Details : '+ details.description)
    expect(wrapper.find('#asset-details-price').text()).toMatch('Prix : '+ details.prix.toString() +' '+ details.unit)
  })
})
