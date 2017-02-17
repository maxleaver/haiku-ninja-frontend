import Vue from 'vue'
import PageFooter from 'src/components/PageFooter'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Comp = Vue.extend(Component)
  const vm = new Comp({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('PageFooter.vue', () => {
  it('should render correct contents', () => {
    expect(getRenderedText(PageFooter, {
      year: 2017
    })).to.equal('© 2017, Max Leaver')
  })
})
