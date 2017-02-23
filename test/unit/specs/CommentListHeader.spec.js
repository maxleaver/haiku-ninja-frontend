import { mount } from 'avoriaz'
import CommentListHeader from 'src/components/CommentListHeader'

describe('CommentListHeader.vue', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(CommentListHeader, {
      propsData: {
        found: 10
      }
    })
  })

  it('renders with initial comment count', () => {
    expect(wrapper.find('strong')[0].text()).to.equal('10 moments')
  })
})
