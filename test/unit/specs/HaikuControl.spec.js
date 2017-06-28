import { mount } from 'avoriaz'
import HaikuControl from 'src/components/HaikuControl'

describe('HaikuControl.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaults = {
      direction: 'left',
      clickAction: () => 'click!'
    }

    return { propsData: Object.assign({}, defaults, overrides) }
  }

  it('has an arrow left glyphicon', () => {
    const wrapper = mount(HaikuControl, getProps())

    expect(wrapper.contains('.glyphicon')).to.be.true
    expect(wrapper.contains('.glyphicon-circle-arrow-left')).to.be.true
  })

  it('triggers an action when clicked', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(HaikuControl, getProps({ clickAction: clickHandler }))

    expect(wrapper.is('.clickable')).to.be.true
    wrapper.trigger('click')
    expect(clickHandler.called).to.be.true
  })
})
