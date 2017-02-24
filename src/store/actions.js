import axios from 'axios'
import getYouTubeID from 'get-youtube-id'
import HttpErrorHandler from 'src/services/HttpErrorHandler'
import lang from 'src/lang/en'

var CancelToken = axios.CancelToken
var source = CancelToken.source()

export const submitForm = ({ commit, dispatch, state }) => {
  const id = getYouTubeID(state.videoUrl)

  if (!id) {
    commit('showError', 'Invalid URL')
    return
  }

  commit('showRequesting')
  dispatch('fetchComments', { id: id, nextPageToken: null })
}

export const fetchComments = ({ commit, dispatch }, payload) => {
  // Confirm data has id property
  if (!payload.hasOwnProperty('id') || !payload.id) {
    commit('showError', lang.errors.badRequest)
  }

  // Set next page token to null if one was not received
  if (!payload.hasOwnProperty('nextPageToken') || !payload.nextPageToken) {
    payload.nextPageToken = null
  }

  // Call the API resource
  axios.get(process.env.API_URI, {
    params: {
      id: payload.id,
      nextPageToken: payload.nextPageToken || null,
      type: 'youtube'
    },

    headers: { 'Authorization': 'Bearer ' + process.env.JWT_TOKEN },

    cancelToken: source.token
  })
  .then(response => {
    if (!response.hasOwnProperty('data') || !response.data) {
      // No data in response
      commit('showResults')
      return
    }

    if (response.data.hasOwnProperty('haiku') && response.data.haiku) {
      // No haiku in response
      commit('appendComments', response.data.haiku)
    }

    if (response.data.hasOwnProperty('commentsSearched') && response.data.commentsSearched) {
      // No comments searched count in response
      commit('incrementSearched', response.data.commentsSearched)
    }

    if (response.data.hasOwnProperty('nextPageToken') && response.data.nextPageToken) {
      // Next page token found. Fetching again.
      dispatch('fetchComments', { id: payload.id, nextPageToken: response.data.nextPageToken })
      return
    }

    // Display results
    commit('showResults')
  })
  .catch((error) => {
    var handler

    if (axios.isCancel(error)) {
      // Request was cancelled by user
      return
    }

    // Get friendly error message
    handler = new HttpErrorHandler(error)

    // Show error
    commit('showError', handler.reason())
  })
}

export const cancelRequest = ({ commit }) => {
  source.cancel('Operation cancelled by user')
  commit('showResults')
}
