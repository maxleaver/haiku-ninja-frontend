import { mount } from 'avoriaz'
import NoHaiku from 'src/components/NoHaiku'

describe('NoHaiku.vue', () => {
  it('is a div', () => {
    const wrapper = mount(NoHaiku)
    expect(wrapper.is('div')).to.be.true
  })

  it('has a lead paragraph', () => {
    const wrapper = mount(NoHaiku)
    expect(wrapper.contains('p')).to.be.true
    expect(wrapper.contains('.lead')).to.be.true
  })
})
