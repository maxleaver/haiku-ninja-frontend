import { mount } from 'avoriaz'
import LoadingSpinner from 'src/components/LoadingSpinner'

describe('LoadingSpinner.vue', () => {
  var clickHandler = sinon.stub()
  var wrapper

  beforeEach(() => {
    wrapper = mount(LoadingSpinner, {
      propsData: {
        cancel: clickHandler,
        found: 10,
        searched: 50
      }
    })
  })

  it('shows a count of found and searched records', () => {
    const found = wrapper.find('.found')[0]

    expect(wrapper.contains('.searched')).to.be.true
    expect(found.text()).to.equal('10')
  })

  it('shows a count of seached records', () => {
    const searched = wrapper.find('.searched')[0]

    expect(wrapper.contains('.searched')).to.be.true
    expect(searched.text()).to.equal('50')
  })

  it('has a cancel button', () => {
    const button = wrapper.find('button')[0]

    expect(wrapper.contains('button')).to.be.true
    expect(button.contains('span')).to.be.true
    expect(wrapper.find('#buttonText')[0].text()).to.equal('Stop Searching')
  })

  it('triggers the cancel action when the cancel button is pressed', () => {
    wrapper.find('button')[0].simulate('click')
    expect(clickHandler.called).to.be.true
  })
})
