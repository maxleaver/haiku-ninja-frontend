import { mount } from 'avoriaz'
import MobileHaikuControls from 'src/components/MobileHaikuControls'

describe('MobileHaikuControls.vue', () => {
  it('has left and right controls', () => {
    const wrapper = mount(MobileHaikuControls)
    expect(wrapper.contains('#leftControl')).to.be.true
    expect(wrapper.contains('#rightControl')).to.be.true
  })

  it('has active styles if controls can be clicked', () => {
    const wrapper = mount(MobileHaikuControls, {
      propsData: {
        canDecrement: true,
        canIncrement: true
      }
    })

    expect(wrapper.find('#leftControl')[0].hasClass('clickable')).to.be.true
    expect(wrapper.find('#rightControl')[0].hasClass('clickable')).to.be.true
  })

  it('has inactive styles if controls cannot be clicked', () => {
    const wrapper = mount(MobileHaikuControls, {
      propsData: {
        canDecrement: false,
        canIncrement: false
      }
    })

    expect(wrapper.find('#leftControl')[0].hasClass('disabled')).to.be.true
    expect(wrapper.find('#rightControl')[0].hasClass('disabled')).to.be.true
  })
})
