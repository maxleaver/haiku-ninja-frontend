import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'avoriaz'
import App from 'src/App'
import PageHeader from 'src/components/PageHeader'
import SearchForm from 'src/components/SearchForm'
import LoadingSpinner from 'src/components/LoadingSpinner'
import HaikuList from 'src/components/HaikuList'
import VideoList from 'src/components/VideoList'
import PageFooter from 'src/components/PageFooter'

Vue.use(Vuex)

describe('App.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      isFetchingHaiku: false,
      showForm: false
    }

    actions = {
      moduleActionClick: sinon.stub()
    }

    store = new Vuex.Store({
      state,
      actions,
      getters: {
        foundHaiku: () => 1,
        canDecrement: () => true,
        canIncrement: () => true
      }
    })
  })

  it('has a #app id and a container', () => {
    const wrapper = shallow(App, { store })
    expect(wrapper.hasAttribute('id', 'app')).to.be.true
    expect(wrapper.hasClass('container')).to.be.true
  })

  it('has a Page Header', () => {
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(PageHeader)).to.be.true
  })

  it('has a Page Header component', () => {
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(PageHeader)).to.be.true
  })

  it('has a Page Footer component', () => {
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(PageFooter)).to.be.true
  })

  it('shows the Search Form component when showForm is true', () => {
    state.showForm = true
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(SearchForm)).to.be.true
  })

  it('does not show the Search Form component if showForm is false', () => {
    state.showForm = false
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(SearchForm)).to.be.false
  })

  it('shows a Loading Spinner component when fetching data', () => {
    state.isFetchingHaiku = true
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(LoadingSpinner)).to.be.true
  })

  it('does not show a Loading Spinner component if not fetching data', () => {
    state.isFetchingHaiku = false
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(LoadingSpinner)).to.be.false
  })

  it('shows a Haiku List if showHaiku is true', () => {
    state.showHaiku = true
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(HaikuList)).to.be.true
  })

  it('does not show a Haiku List if showHaiku is false', () => {
    state.showHaiku = false
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(HaikuList)).to.be.false
  })

  it('shows a Video List if showVideos is true', () => {
    state.showVideos = true
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(VideoList)).to.be.true
  })

  it('does not show a Video List if showVideos is false', () => {
    state.showVideos = false
    const wrapper = shallow(App, { store })
    expect(wrapper.contains(VideoList)).to.be.false
  })
})
