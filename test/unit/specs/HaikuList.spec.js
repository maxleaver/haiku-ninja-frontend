import { mount } from 'avoriaz'
import HaikuList from 'src/components/HaikuList'
import HaikuListHeader from 'src/components/HaikuListHeader'
import Haiku from 'src/components/Haiku'
import HaikuControl from 'src/components/HaikuControl'
import MobileHaikuControls from 'src/components/MobileHaikuControls'
import NoHaiku from 'src/components/NoHaiku'

describe('HaikuList.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaults = {
      active: 0,
      canDecrement: false,
      canIncrement: false,
      haiku: ['one'],
      decrement: () => 'decrement!',
      found: 1,
      increment: () => 'increment!',
      reset: () => 'reset!',
      showVideos: () => 'show videos!',
      videos: ['one']
    }

    return { propsData: Object.assign({}, defaults, overrides) }
  }

  it('displays child components if there are haiku', () => {
    const wrapper = mount(HaikuList, getProps())

    expect(wrapper.is('div')).to.be.true
    expect(wrapper.contains(HaikuListHeader)).to.be.true
    expect(wrapper.contains(Haiku)).to.be.true
    expect(wrapper.contains(MobileHaikuControls)).to.be.true
  })

  it('displays increment/decrement controls if they can be used', () => {
    const wrapper = mount(HaikuList, getProps({ canDecrement: true, canIncrement: true }))
    const controls = wrapper.find(HaikuControl)

    expect(controls.length).to.equal(2)
  })

  it('does not show a haiku component if there are no haiku', () => {
    const wrapper = mount(HaikuList, getProps({ found: 0 }))
    expect(wrapper.contains(NoHaiku)).to.be.true
  })

  it('has a start over button', () => {
    const wrapper = mount(HaikuList, getProps())
    expect(wrapper.contains('#resetButton')).to.be.true
  })

  it('does not have a video search button if there are no video search results', () => {
    const wrapper = mount(HaikuList, getProps({ videos: [] }))
    expect(wrapper.contains('#videoButton')).to.be.false
  })

  it('has a video search button if there are video search results', () => {
    const wrapper = mount(HaikuList, getProps())
    expect(wrapper.contains('#videoButton')).to.be.true
  })

  it('triggers the show videos action when the video search button is clicked', () => {
    const clickHandler = sinon.stub()
    const wrapper = mount(HaikuList, getProps({ showVideos: clickHandler }))

    expect(wrapper.contains('#videoButton')).to.be.true
    wrapper.find('#videoButton')[0].trigger('click') // Click!
    expect(clickHandler.called).to.be.true
  })

  it('triggers the reset action when the start over button is clicked', () => {
    const clickHandler = sinon.stub()
    const wrapper = mount(HaikuList, getProps({ reset: clickHandler }))

    expect(wrapper.contains('#resetButton')).to.be.true
    wrapper.find('#resetButton')[0].trigger('click') // Click!
    expect(clickHandler.called).to.be.true
  })
})
