import { mount } from 'avoriaz'
import VideoList from 'src/components/VideoList'
import VideoResult from 'src/components/VideoResult'

describe('VideoList.vue', () => {
  function makeVideo () {
    return {
      clickAction: () => 'some action',
      id: Math.random().toString(36).substr(2, 5), // random string
      title: 'My Title',
      description: 'My Description',
      thumbnails: {
        medium: {}
      }
    }
  }

  function getProps (overrides) {
    overrides = overrides || {}
    const defaultProps = {
      fetchHaiku: () => 'fetch!',
      reset: () => 'reset!',
      searchTerm: 'keyboard cat',
      videos: [
        makeVideo(),
        makeVideo()
      ]
    }

    return { propsData: Object.assign({}, defaultProps, overrides) }
  }

  it('shows video results if there are some', () => {
    const wrapper = mount(VideoList, getProps())
    expect(wrapper.contains(VideoResult)).to.be.true
  })

  it('does not show video results if there arent any', () => {
    const wrapper = mount(VideoList, getProps({ videos: [] }))
    expect(wrapper.contains(VideoResult)).to.be.false
  })

  it('has a try again button that resets the application when clicked', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(VideoList, getProps({ reset: clickHandler }))

    expect(wrapper.contains('#resetButton')).to.be.true
    wrapper.find('#resetButton')[0].trigger('click')
    expect(clickHandler.called).to.be.true
  })
})
