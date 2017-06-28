import { mount } from 'avoriaz'
import LoadingSpinner from 'src/components/LoadingSpinner'

describe('LoadingSpinner.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaults = {
      isFetchingHaiku: true,
      isFetchingVideos: false,
      cancel: () => 'cancel!',
      found: 10,
      searched: 50
    }

    return { propsData: Object.assign({}, defaults, overrides) }
  }

  it('displays a count of found and searched records when searching for haiku', () => {
    const wrapper = mount(LoadingSpinner, getProps())

    expect(wrapper.contains('#resultCounter')).to.be.true
    expect(wrapper.find('#resultCounter')[0].text().trim()).to.equal('Found 10 Haiku in 50 comments')
  })

  it('does NOT display searched or found records count when searching videos', () => {
    const wrapper = mount(LoadingSpinner, getProps({ isFetchingHaiku: false, isFetchingVideos: true }))
    expect(wrapper.contains('#resultCounter')).to.be.false
  })

  it('has a cancel button', () => {
    const wrapper = mount(LoadingSpinner, getProps())

    expect(wrapper.contains('button')).to.be.true
    expect(wrapper.contains('#buttonText')).to.be.true
    expect(wrapper.find('button')[0].contains('span')).to.be.true
    expect(wrapper.find('#buttonText')[0].text()).to.equal('Stop Searching')
  })

  it('triggers a cancel action when cancel is pressed', () => {
    const clickHandler = sinon.stub()
    const wrapper = mount(LoadingSpinner, getProps({ cancel: clickHandler }))

    wrapper.find('button')[0].trigger('click')
    expect(clickHandler.called).to.be.true
  })
})
