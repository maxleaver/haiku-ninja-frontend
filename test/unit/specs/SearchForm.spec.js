import { mount } from 'avoriaz'
import SearchForm from 'src/components/SearchForm'
import Alert from 'src/components/Alert'

describe('SearchForm.vue', () => {
  function getProps (overrides) {
    overrides = overrides || {}
    const defaults = {
      errorMessage: '',
      hasError: false,
      submit: () => 'submit!',
      update: () => 'update!',
      formInput: ''
    }

    return { propsData: Object.assign({}, defaults, overrides) }
  }

  it('has a submit button that triggers the submit action when pressed', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(SearchForm, getProps({ submit: clickHandler }))

    expect(wrapper.contains('button')).to.be.true
    wrapper.find('button')[0].trigger('click')
    expect(clickHandler.called).to.be.true
  })

  it('triggers the submit action when enter is pressed', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(SearchForm, getProps({ submit: clickHandler }))

    expect(wrapper.contains('input')).to.be.true
    wrapper.find('input')[0].trigger('keydown.enter')
    expect(clickHandler.called).to.be.true
  })

  it('triggers the update action when text is entered', () => {
    const clickHandler = sinon.spy()
    const wrapper = mount(SearchForm, getProps({ update: clickHandler }))

    expect(wrapper.contains('input')).to.be.true
    wrapper.find('input')[0].trigger('input') // Simulate entering text in the field
    expect(clickHandler.called).to.be.true
  })

  it('displays an alert if there is an error', () => {
    const wrapper = mount(SearchForm, getProps({ hasError: true }))
    expect(wrapper.contains(Alert)).to.be.true
  })
})
