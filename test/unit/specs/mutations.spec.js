import { mutations } from 'src/store/mutations'
import { initialState } from 'src/store/initialState'
import * as types from 'src/store/mutation-types'

describe('mutations', () => {
  it('shows video loader', () => {
    const state = { isFetchingVideos: false }
    mutations[types.VIDEO_REQUEST](state)
    expect(state.abortSearch).to.be.false
    expect(state.isFetchingVideos).to.be.true
    expect(state.showForm).to.be.false
  })

  it('appends and displays video search results', () => {
    const state = {
      isFetchingVideos: true,
      nextPageToken: '',
      showVideos: false,
      videos: []
    }
    mutations[types.VIDEO_SUCCESS](state, { videos: ['one', 'two'], nextPageToken: 'abc123' })
    expect(state.videos).to.have.lengthOf(2)
    expect(state.nextPageToken).to.equal('abc123')
    expect(state.isFetchingVideos).to.be.false
    expect(state.showVideos).to.be.true
  })

  it('shows an error on video search failure', () => {
    const state = {
      errorMessage: '',
      hasError: false,
      isFetchingVideos: true,
      showForm: false
    }
    mutations[types.VIDEO_FAILURE](state, 'error message')
    expect(state.errorMessage).to.equal('error message')
    expect(state.hasError).to.be.true
    expect(state.isFetchingVideos).to.be.false
    expect(state.showForm).to.be.true
  })

  it('shows video search results', () => {
    const state = {
      isFetchingVideos: true,
      showHaiku: true,
      showVideos: false
    }
    mutations[types.VIDEO_SHOW](state)
    expect(state.isFetchingVideos).to.be.false
    expect(state.showHaiku).to.be.false
    expect(state.showVideos).to.be.true
  })

  it('shows haiku loader while fetching', () => {
    const state = {
      abortSearch: true,
      isFetchingHaiku: false,
      showForm: true
    }
    mutations[types.HAIKU_REQUEST](state)
    expect(state.abortSearch).to.be.false
    expect(state.isFetchingHaiku).to.be.true
    expect(state.showForm).to.be.false
  })

  it('appends haiku and increments searched on successful request', () => {
    const state = { 'haiku': [], recordsSearched: 10 }
    mutations[types.HAIKU_SUCCESS](state, { haiku: ['one', 'two'], searched: 50 })
    expect(state.haiku).to.have.lengthOf(2)
    expect(state.recordsSearched).to.equal(60)
  })

  it('shows an error on haiku search failure', () => {
    const state = {
      errorMessage: '',
      hasError: false,
      isFetchingHaiku: true,
      showForm: false
    }
    mutations[types.HAIKU_FAILURE](state, 'error message')
    expect(state.errorMessage).to.equal('error message')
    expect(state.hasError).to.be.true
    expect(state.isFetchingHaiku).to.be.false
    expect(state.showForm).to.be.true
  })

  it('shows haiku results', () => {
    const state = {
      abortSearch: true,
      isFetchingHaiku: true,
      showForm: true,
      showHaiku: false
    }
    mutations[types.HAIKU_SHOW](state)
    expect(state.abortSearch).to.be.false
    expect(state.activeHaiku).to.equal(0)
    expect(state.isFetchingHaiku).to.be.false
    expect(state.showForm).to.be.false
    expect(state.showHaiku).to.be.true
  })

  it('clears haiku results', () => {
    const state = {
      activeHaiku: 2,
      haiku: ['one', 'two'],
      recordsSearched: 100
    }
    mutations[types.HAIKU_CLEAR](state)
    expect(state.activeHaiku).to.equal(0)
    expect(state.haiku).to.be.empty
    expect(state.recordsSearched).to.equal(0)
  })

  it('shows error message', () => {
    const state = { hasError: false, errorMessage: '' }
    mutations[types.SHOW_ERROR](state, 'testing error')
    expect(state.abortSearch).to.be.false
    expect(state.activeHaiku).to.equal(0)
    expect(state.haiku).to.be.empty
    expect(state.errorMessage).to.equal('testing error')
    expect(state.hasError).to.be.true
    expect(state.isFetchingVideos).to.be.false
    expect(state.isFetchingHaiku).to.be.false
    expect(state.recordsSearched).to.equal(0)
    expect(state.showForm).to.be.true
    expect(state.showHaiku).to.be.false
  })

  it('updates form data', () => {
    const state = { formInput: null }
    mutations[types.UPDATE_FORM](state, 'http://www.example.com')
    expect(state.formInput).to.equal('http://www.example.com')
  })

  it('resets state to initial state', () => {
    const state = {}
    const expected = initialState()

    mutations[types.RESET_APP](state)
    expect(state).to.deep.equal(expected)
  })

  it('clear errors and search results', () => {
    const state = {
      activeHaiku: 2,
      haiku: ['one', 'two', 'three'],
      hasError: false,
      errorMessage: '',
      videos: ['one', 'two', 'three']
    }
    mutations[types.CLEAR_RESULTS](state)
    expect(state.activeHaiku).to.equal(0)
    expect(state.haiku).to.be.empty
    expect(state.errorMessage).to.equal('')
    expect(state.hasError).to.be.false
    expect(state.videos).to.be.empty
  })

  it('increases the active haiku by one, but not past the total haiku count', () => {
    const state = {
      haiku: ['one', 'two', 'three'],
      activeHaiku: 1
    }
    mutations[types.INCREMENT_HAIKU](state)
    expect(state.activeHaiku).to.equal(2)

    mutations[types.INCREMENT_HAIKU](state)
    expect(state.activeHaiku).to.equal(2)
  })

  it('decreases the active haiku by one, but not below zero', () => {
    const state = {
      haiku: ['one', 'two', 'three'],
      activeHaiku: 2
    }
    mutations[types.DECREMENT_HAIKU](state)
    expect(state.activeHaiku).to.equal(1)

    mutations[types.DECREMENT_HAIKU](state)
    expect(state.activeHaiku).to.equal(0)

    mutations[types.DECREMENT_HAIKU](state)
    expect(state.activeHaiku).to.equal(0)
  })
})
