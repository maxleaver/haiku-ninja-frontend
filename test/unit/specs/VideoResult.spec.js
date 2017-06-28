import { mount } from 'avoriaz'
import VideoResult from 'src/components/VideoResult'

describe('VideoResult.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaultProps = {
      clickAction: () => 'click!',
      description: 'Some description',
      id: 'abc123',
      thumbnailUrl: 'http://some.test.com/img.jpg',
      title: 'Some title'
    }

    return { propsData: Object.assign({}, defaultProps, overrides) }
  }

  it('has a thumbnail image', () => {
    const wrapper = mount(VideoResult, getProps())
    expect(wrapper.contains('img')).to.be.true
  })

  it('triggers an action when clicked', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(VideoResult, getProps({ clickAction: clickHandler }))

    wrapper.trigger('click')
    expect(clickHandler.called).to.be.true
  })

  it('has a title', () => {
    const wrapper = mount(VideoResult, getProps({ title: 'test' }))

    expect(wrapper.contains('h4')).to.be.true
    expect(wrapper.find('h4')[0].text()).to.equal('test')
  })

  it('has a description', () => {
    const wrapper = mount(VideoResult, getProps({ description: 'test' }))

    expect(wrapper.contains('p')).to.be.true
    expect(wrapper.find('p')[0].text()).to.equal('test')
  })
})
