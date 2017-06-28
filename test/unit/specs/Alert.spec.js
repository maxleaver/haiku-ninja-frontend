import { mount } from 'avoriaz'
import Alert from 'src/components/Alert'

describe('Alert.vue', () => {
  it('renders with a message', () => {
    const wrapper = mount(Alert, { propsData: { message: 'test message' } })

    expect(wrapper.contains('#errorMessage'))
    expect(wrapper.find('#errorMessage')[0].text()).to.equal('test message')
  })
})
