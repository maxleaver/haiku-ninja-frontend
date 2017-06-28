import { mount } from 'avoriaz'
import HaikuListHeader from 'src/components/HaikuListHeader'

describe('HaikuListHeader.vue', () => {
  it('renders with initial haiku count', () => {
    const wrapper = mount(HaikuListHeader, { propsData: { found: 10 } })
    expect(wrapper.find('strong')[0].text()).to.equal('10 moments')
  })
})
