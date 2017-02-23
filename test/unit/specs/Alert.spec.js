import { mount } from 'avoriaz'
import Alert from 'src/components/Alert'

describe('Alert.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Alert, {
      propsData: {
        message: 'test message'
      }
    })
  })

  it('renders with a message', () => {
    const message = wrapper.find('#errorMessage')[0]
    expect(message.text()).to.equal('test message')
  })
})
