import { mount } from 'avoriaz'
import PageFooter from 'src/components/PageFooter'

describe('PageFooter.vue', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(PageFooter, {
      propsData: {
        year: 2001
      }
    })
  })

  it('displays the year passed in props', () => {
    expect(wrapper.find('span')[0].text()).to.equal('2001')
  })
})
