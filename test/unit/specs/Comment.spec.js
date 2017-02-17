import Vue from 'vue'
import Comment from 'src/components/Comment'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Comp = Vue.extend(Component)
  const vm = new Comp({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('Comment.vue', () => {
  it('should render correct contents', () => {
    expect(getRenderedText(Comment, {
      author: 'John Doe',
      first: 'First line',
      second: 'Second line',
      third: 'Third line'
    })).to.equal('\n    First line\n    Second line\n    Third line\n   John Doe')
  })
})
