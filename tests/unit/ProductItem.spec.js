import { mount } from '@vue/test-utils'
import ProductItem from '@/components/ProductItem.vue'

describe('ProductItem.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(ProductItem, {
      props: {
          data: {
            title: 'Test me',
            price: 100,
            id: 42
            }
      }
    })
    
    expect(wrapper.find('h5').exists()).toBe(true)
    expect(wrapper.findAll('h5').length).toBe(2)
    expect(wrapper.find('h5').text()).toMatch('Test me')
  })
})
