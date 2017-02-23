import { mount } from 'avoriaz'
import Comment from 'src/components/Comment'

describe('Comment.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Comment, {
      propsData: {
        author: 'John Doe',
        first: 'First line',
        second: 'Second line',
        third: 'Third line'
      }
    })
  })

  it('renders prop data correctly', () => {
    expect(wrapper.find('#firstLine')[0].text()).to.equal('First line')
    expect(wrapper.find('#secondLine')[0].text()).to.equal('Second line')
    expect(wrapper.find('#thirdLine')[0].text()).to.equal('Third line')
    expect(wrapper.find('#author')[0].text()).to.equal('John Doe')
  })
})
