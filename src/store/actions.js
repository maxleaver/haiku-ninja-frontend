import { getComments, cancel } from '../api'
import getYouTubeID from 'get-youtube-id'

export const submitForm = ({ commit, dispatch, state }, url) => {
  const id = getYouTubeID(url)

  if (!id) {
    commit('showError', 'Invalid URL')
    return
  }

  commit('showRequesting')
  dispatch('fetchComments', { id: id, nextPageToken: null })
}

export const fetchComments = ({ commit, dispatch }, data) => {
  return getComments(data.id, data.nextPageToken)
  .then((response) => {
    if (response && response.hasOwnProperty('data')) {
      commit('appendComments', response.data.haiku)
      commit('incrementSearched', response.data.commentsSearched)

      if (response.data.nextPageToken !== null && response.data.nextPageToken.length > 0) {
        dispatch('fetchComments', { id: data.id, nextPageToken: response.data.nextPageToken })
        return
      }
    }

    commit('showResults')
  })
  .catch((error) => {
    commit('showError', error.message)
  })
}

export const cancelRequest = ({ commit }) => {
  cancel()
  commit('showResults')
}
