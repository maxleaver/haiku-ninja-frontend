import { mount } from 'avoriaz'
import MobileCommentControls from 'src/components/MobileCommentControls'

function mountComponent (propsData) {
  return mount(MobileCommentControls, { propsData: propsData })
}

describe('MobileCommentControls.vue', () => {
  it('has active styles if controls can be clicked', () => {
    const vm = mountComponent({
      canDecrement: true,
      canIncrement: true
    })

    expect(vm.find('#leftControl')[0].hasClass('clickable')).to.be.true
    expect(vm.find('#rightControl')[0].hasClass('clickable')).to.be.true
  })

  it('has inactive styles if controls cannot be clicked', () => {
    const vm = mountComponent({
      canDecrement: false,
      canIncrement: false
    })

    expect(vm.find('#leftControl')[0].hasClass('disabled')).to.be.true
    expect(vm.find('#rightControl')[0].hasClass('disabled')).to.be.true
  })
})
