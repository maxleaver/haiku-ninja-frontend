import { initialState } from './initialState'
import * as types from './mutation-types'

export var state = initialState()

export const mutations = {
  [types.VIDEO_REQUEST] (state) {
    state.abortSearch = false
    state.isFetchingVideos = true
    state.showForm = false
  },

  [types.VIDEO_SUCCESS] (state, payload) {
    state.isFetchingVideos = false
    state.nextPageToken = payload.nextPageToken
    state.showVideos = true
    state.videos = state.videos.concat(payload.videos)
  },

  [types.VIDEO_FAILURE] (state, message) {
    state.errorMessage = message
    state.hasError = true
    state.isFetchingVideos = false
    state.showForm = true
  },

  [types.VIDEO_SHOW] (state) {
    state.isFetchingVideos = false
    state.showVideos = true
    state.showHaiku = false
  },

  [types.HAIKU_REQUEST] (state) {
    state.abortSearch = false
    state.isFetchingHaiku = true
    state.showForm = false
  },

  [types.HAIKU_SUCCESS] (state, payload) {
    state.haiku = state.haiku.concat(payload.haiku)
    state.recordsSearched = state.recordsSearched + payload.searched
  },

  [types.HAIKU_FAILURE] (state, message) {
    state.errorMessage = message
    state.hasError = true
    state.isFetchingHaiku = false
    state.showForm = true
  },

  [types.HAIKU_SHOW] (state) {
    state.abortSearch = false
    state.activeHaiku = 0
    state.isFetchingHaiku = false
    state.showForm = false
    state.showHaiku = true
  },

  [types.HAIKU_CLEAR] (state) {
    state.activeHaiku = 0
    state.haiku = []
    state.recordsSearched = 0
  },

  [types.SHOW_ERROR] (state, message) {
    state.abortSearch = false
    state.activeHaiku = 0
    state.haiku = []
    state.errorMessage = message
    state.hasError = true
    state.isFetchingVideos = false
    state.isFetchingHaiku = false
    state.recordsSearched = 0
    state.showForm = true
    state.showHaiku = false
  },

  [types.CLEAR_RESULTS] (state) {
    state.activeHaiku = 0
    state.haiku = []
    state.errorMessage = ''
    state.hasError = false
    state.videos = []
  },

  [types.UPDATE_FORM] (state, formData) {
    state.formInput = formData.trim()
  },

  [types.RESET_APP] (state) {
    state = Object.assign(state, initialState())
  },

  [types.INCREMENT_HAIKU] (state) {
    if (state.activeHaiku + 1 < state.haiku.length) {
      state.activeHaiku = state.activeHaiku + 1
    }
  },

  [types.DECREMENT_HAIKU] (state) {
    if (state.activeHaiku > 0) {
      state.activeHaiku = state.activeHaiku - 1
    }
  }
}
