import { mount } from 'avoriaz'
import MobileHaikuControls from 'src/components/MobileHaikuControls'

describe('MobileHaikuControls.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaults = {
      canDecrement: true,
      canIncrement: true,
      decrement: () => 'click!',
      increment: () => 'click!'
    }

    return { propsData: Object.assign({}, defaults, overrides) }
  }

  it('has left and right controls', () => {
    const wrapper = mount(MobileHaikuControls, getProps())
    expect(wrapper.contains('#leftControl')).to.be.true
    expect(wrapper.contains('#rightControl')).to.be.true
  })

  it('has active styles if controls can be clicked', () => {
    const wrapper = mount(MobileHaikuControls, getProps())
    expect(wrapper.find('#leftControl')[0].hasClass('clickable')).to.be.true
    expect(wrapper.find('#rightControl')[0].hasClass('clickable')).to.be.true
  })

  it('has inactive styles if controls cannot be clicked', () => {
    const wrapper = mount(MobileHaikuControls, getProps({ canDecrement: false, canIncrement: false }))
    expect(wrapper.find('#leftControl')[0].hasClass('disabled')).to.be.true
    expect(wrapper.find('#rightControl')[0].hasClass('disabled')).to.be.true
  })

  it('triggers the decrement action when the left control is clicked', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(MobileHaikuControls, getProps({ decrement: clickHandler }))
    const button = wrapper.find('#leftControl')[0]

    expect(button.is('.clickable')).to.be.true
    button.trigger('click')
    expect(clickHandler.called).to.be.true
  })

  it('triggers the increment action when the right control is clicked', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(MobileHaikuControls, getProps({ increment: clickHandler }))
    const button = wrapper.find('#rightControl')[0]

    expect(button.is('.clickable')).to.be.true
    button.trigger('click')
    expect(clickHandler.called).to.be.true
  })
})
