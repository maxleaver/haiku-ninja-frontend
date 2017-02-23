import { initialState } from './initialState'

export var state = initialState()

export const mutations = {
  showRequesting (state) {
    state.abortSearch = false
    state.activeComment = 0
    state.comments = []
    state.errorMessage = false
    state.hasError = false
    state.isRequesting = true
    state.recordsSearched = 0
    state.showForm = false
    state.showResults = false
  },

  appendComments (state, comments) {
    state.comments = state.comments.concat(comments)
  },

  incrementSearched (state, searched) {
    state.recordsSearched = state.recordsSearched + searched
  },

  showResults (state) {
    state.abortSearch = false
    state.activeComment = 0
    state.errorMessage = false
    state.hasError = false
    state.isRequesting = false
    state.recordsSearched = 0
    state.showForm = false
    state.showResults = true
  },

  showError (state, message) {
    state.abortSearch = false
    state.activeComment = 0
    state.comments = []
    state.errorMessage = message
    state.hasError = true
    state.isRequesting = false
    state.recordsSearched = 0
    state.showForm = true
    state.showResults = false
  },

  updateUrl (state, url) {
    state.videoUrl = url.trim()
  },

  resetState (state) {
    state = Object.assign(state, initialState())
  },

  incrementComment (state) {
    if (state.activeComment + 1 < state.comments.length) {
      state.activeComment = state.activeComment + 1
    }
  },

  decrementComment (state) {
    if (state.activeComment > 0) {
      state.activeComment = state.activeComment - 1
    }
  }
}
