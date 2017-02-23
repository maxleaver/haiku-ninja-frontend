import { mount } from 'avoriaz'
import VideoForm from 'src/components/VideoForm'
import Alert from 'src/components/Alert'

function mountComponent (propsData) {
  return mount(VideoForm, { propsData: propsData })
}

function keyPress (key) {
  var event = document.createEvent('Event')
  event.keyCode = key
  event.initEvent('keydown')
  document.dispatchEvent(event)
}

describe('VideoForm.vue', () => {
  const clickHandler = sinon.stub()
  const defaultProps = {
    errorMessage: '',
    hasError: false,
    submit: clickHandler,
    update: clickHandler,
    videoUrl: ''
  }

  it('has a submit button that triggers the submit action when pressed', () => {
    const wrapper = mountComponent(defaultProps)

    expect(wrapper.find('button')[0].is('button')).to.be.true

    wrapper.find('button')[0].simulate('click')

    expect(clickHandler.called).to.be.true
  })

  it('triggers the submit action when enter is pressed', () => {
    const wrapper = mountComponent(defaultProps)
    expect(wrapper.find('input')[0].is('input')).to.be.true

    keyPress(13)

    expect(clickHandler.called).to.be.true
  })

  it('displays the alert component if there is an error', () => {
    defaultProps.hasError = true
    const wrapper = mountComponent(defaultProps)

    expect(wrapper.find(Alert)[0].isVueComponent).to.be.true
  })
})
