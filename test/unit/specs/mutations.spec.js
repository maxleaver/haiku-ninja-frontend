import { mutations } from 'src/store/mutations'
import { initialState } from 'src/store/initialState'

describe('mutations', () => {
  it('sets state to requesting', () => {
    const state = { isRequesting: false }
    mutations.showRequesting(state)
    expect(state.abortSearch).to.be.false
    expect(state.activeComment).to.equal(0)
    expect(state.comments).to.be.empty
    expect(state.errorMessage).to.be.false
    expect(state.hasError).to.be.false
    expect(state.isRequesting).to.be.true
    expect(state.recordsSearched).to.equal(0)
    expect(state.showForm).to.be.false
    expect(state.showResults).to.be.false
  })

  it('appends comments to the array of comments', () => {
    const state = { comments: ['item1'] }
    expect(state.comments.length).to.equal(1)
    mutations.appendComments(state, ['item 2', 'item3'])
    expect(state.comments.length).to.equal(3)
  })

  it('increments number of records searched by 100', () => {
    const state = { recordsSearched: 0 }
    mutations.incrementSearched(state, 100)
    expect(state.recordsSearched).to.equal(100)
  })

  it('sets state to display results', () => {
    const state = {
      isRequesting: true,
      recordsSearched: 500,
      showForm: true,
      showResults: false
    }
    mutations.showResults(state)
    expect(state.abortSearch).to.be.false
    expect(state.activeComment).to.equal(0)
    expect(state.errorMessage).to.be.false
    expect(state.hasError).to.be.false
    expect(state.isRequesting).to.be.false
    expect(state.recordsSearched).to.equal(0)
    expect(state.showForm).to.be.false
    expect(state.showResults).to.be.true
  })

  it('shows error message', () => {
    const state = { hasError: false, errorMessage: '' }
    mutations.showError(state, 'testing error')
    expect(state.abortSearch).to.be.false
    expect(state.activeComment).to.equal(0)
    expect(state.comments).to.be.empty
    expect(state.errorMessage).to.equal('testing error')
    expect(state.hasError).to.be.true
    expect(state.isRequesting).to.be.false
    expect(state.recordsSearched).to.equal(0)
    expect(state.showForm).to.be.true
    expect(state.showResults).to.be.false
  })

  it('updates url', () => {
    const state = { videoUrl: null }
    mutations.updateUrl(state, 'http://www.example.com')
    expect(state.videoUrl).to.equal('http://www.example.com')
  })

  it('resets state to the initial state', () => {
    const state = {}
    let reset = initialState()

    mutations.resetState(state)
    expect(state).to.deep.equal(reset)
  })

  it('increases the active comment by one', () => {
    const state = { activeComment: 5 }
    mutations.incrementComment(state)
    expect(state.activeComment).to.equal(6)
  })

  it('decreases the active comment by one', () => {
    const state = { activeComment: 5 }
    mutations.decrementComment(state)
    expect(state.activeComment).to.equal(4)
  })
})
