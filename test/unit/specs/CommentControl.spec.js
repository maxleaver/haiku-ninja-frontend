import { mount } from 'avoriaz'
import CommentControl from 'src/components/CommentControl'

describe('CommentControl.vue', () => {
  const clickHandler = sinon.stub()
  let wrapper

  beforeEach(() => {
    wrapper = mount(CommentControl, {
      propsData: {
        direction: 'left',
        clickAction: clickHandler
      }
    })
  })

  it('displays the correct glyphicon', () => {
    expect(wrapper.find('.glyphicon')[0].hasClass('glyphicon-circle-arrow-left')).to.be.true
  })

  it('triggers the click action when clicked', () => {
    wrapper.find('.clickable')[0].simulate('click')
    expect(clickHandler.called).to.be.true
  })
})
