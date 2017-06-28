import { mount } from 'avoriaz'
import PageHeader from 'src/components/PageHeader'

describe('PageHeader.vue', () => {
  it('has a logo', () => {
    const wrapper = mount(PageHeader)
    expect(wrapper.contains('.logo'))
  })

  it('has a title', () => {
    const wrapper = mount(PageHeader)
    expect(wrapper.contains('h1'))
  })

  it('has a tagline paragraph', () => {
    const wrapper = mount(PageHeader)
    expect(wrapper.contains('p'))
  })
})
