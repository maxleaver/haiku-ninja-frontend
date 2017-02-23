import { mount } from 'avoriaz'
import CommentList from 'src/components/CommentList'
import CommentListHeader from 'src/components/CommentListHeader'
import Comment from 'src/components/Comment'
import CommentControl from 'src/components/CommentControl'
import MobileCommentControls from 'src/components/MobileCommentControls'
import NoComments from 'src/components/NoComments'

function mountComponent (propsData) {
  return mount(CommentList, { propsData: propsData })
}

describe('CommentList.vue', () => {
  const clickHandler = sinon.stub()
  const defaultProps = {
    active: 0,
    canDecrement: false,
    canIncrement: false,
    comments: ['one'],
    decrement: () => 'decrement!',
    found: 1,
    increment: () => 'increment!',
    reset: clickHandler
  }

  it('displays child components if there are comments', () => {
    const wrapper = mountComponent(defaultProps)
    expect(wrapper.find(CommentListHeader)[0].isVueComponent).to.be.true
    expect(wrapper.find(Comment)[0].isVueComponent).to.be.true
    expect(wrapper.find(MobileCommentControls)[0].isVueComponent).to.be.true
  })

  it('displays control if they can be used', () => {
    defaultProps.canDecrement = true
    defaultProps.canIncrement = true
    const wrapper = mountComponent(defaultProps)
    expect(wrapper.find(CommentControl)[0].isVueComponent).to.be.true
    expect(wrapper.find(CommentControl)[1].isVueComponent).to.be.true
  })

  it('displays no comments component if no comments were found', () => {
    defaultProps.found = 0
    const wrapper = mountComponent(defaultProps)
    expect(wrapper.find(NoComments)[0].isVueComponent).to.be.true
  })

  it('has a reset button', () => {
    const wrapper = mountComponent(defaultProps)
    expect(wrapper.find('button > span')[0].hasClass('glyphicon-repeat')).to.be.true
    expect(wrapper.find('#resetText')[0].text()).to.be.equal('Try another video')
  })

  it('triggers the reset action when the reset button is clicked', () => {
    const wrapper = mountComponent(defaultProps)
    wrapper.find('button')[0].simulate('click')
    expect(clickHandler.called).to.be.true
  })
})
