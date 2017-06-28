import { mount } from 'avoriaz'
import Haiku from 'src/components/Haiku'

describe('Haiku.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaults = {
      author: 'John Doe',
      first: 'First line',
      second: 'Second line',
      third: 'Third line'
    }

    return { propsData: Object.assign({}, defaults, overrides) }
  }

  it('contains the first line of a haiku', () => {
    const wrapper = mount(Haiku, getProps())
    expect(wrapper.contains('#firstLine')).to.be.true
    expect(wrapper.find('#firstLine')[0].text()).to.equal('First line')
  })

  it('contains the second line of a haiku', () => {
    const wrapper = mount(Haiku, getProps())
    expect(wrapper.contains('#secondLine')).to.be.true
    expect(wrapper.find('#secondLine')[0].text()).to.equal('Second line')
  })

  it('contains the third line of a haiku', () => {
    const wrapper = mount(Haiku, getProps())
    expect(wrapper.contains('#thirdLine')).to.be.true
    expect(wrapper.find('#thirdLine')[0].text()).to.equal('Third line')
  })

  it('contains an author', () => {
    const wrapper = mount(Haiku, getProps())
    expect(wrapper.contains('#author')).to.be.true
    expect(wrapper.find('#author')[0].text()).to.equal('John Doe')
  })
})
