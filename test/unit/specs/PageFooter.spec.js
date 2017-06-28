import { mount } from 'avoriaz'
import PageFooter from 'src/components/PageFooter'

describe('PageFooter.vue', () => {
  it('shows the year', () => {
    const wrapper = mount(PageFooter, { propsData: { year: 2001 } })
    expect(wrapper.contains('span'))
    expect(wrapper.find('span')[0].text()).to.equal('2001')
  })
})
