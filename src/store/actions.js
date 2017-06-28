import ApiService from '../services/ApiService'
import getYouTubeID from 'get-youtube-id'
import HttpErrorHandler from 'src/services/HttpErrorHandler'
import * as types from 'src/store/mutation-types'
import lang from 'src/lang/en'

let api = new ApiService()

export const decrementHaiku = ({ commit }) => {
  commit(types.DECREMENT_HAIKU)
}

export const incrementHaiku = ({ commit }) => {
  commit(types.INCREMENT_HAIKU)
}

export const updateForm = ({ commit }, e) => {
  commit(types.UPDATE_FORM, e.target.value)
}

export const resetApp = ({ commit }) => {
  commit(types.RESET_APP)
}

export const showVideoResults = ({ commit }) => {
  commit(types.HAIKU_CLEAR)
  commit(types.VIDEO_SHOW)
}

export const submitForm = ({ commit, dispatch, state }) => {
  if (!state.formInput) {
    commit(types.SHOW_ERROR, lang.errors.noInput)
    return
  }

  commit(types.CLEAR_RESULTS)

  const id = getYouTubeID(state.formInput, { fuzzy: false })

  if (id) {
    fetchHaiku({ commit, dispatch }, { id: id, nextPageToken: null })
    return
  }

  fetchVideos({ commit, dispatch }, { q: state.formInput, nextPageToken: null })
}

export const fetchHaiku = ({ commit, dispatch }, payload) => {
  const nextPageToken = payload.hasOwnProperty('nextPageToken') ? payload.nextPageToken : null

  // Confirm data has id property
  if (!payload.hasOwnProperty('id') || !payload.id) {
    commit(types.SHOW_ERROR, lang.errors.badRequest)
    return
  }

  commit(types.HAIKU_REQUEST)

  api.get('/comments', { id: payload.id, nextPageToken: nextPageToken, type: 'youtube' })
    .then(response => {
      if (response === undefined || !response) {
        commit(types.HAIKU_SHOW)
        return
      }

      commit(types.HAIKU_SUCCESS, {
        haiku: getHaiku(response),
        searched: getCommentsSearched(response)
      })

      if (response.hasOwnProperty('nextPageToken') && response.nextPageToken) {
        // Next page token found. Fetch again.
        fetchHaiku({ commit, dispatch }, { id: payload.id, nextPageToken: response.nextPageToken })
        return
      }

      // Display results
      commit(types.HAIKU_SHOW)
    })
    .catch(error => {
      commit(types.SHOW_ERROR, getErrorMessage(error))
    })
}

export const fetchVideos = ({ commit, dispatch }, payload) => {
  const nextPageToken = payload.hasOwnProperty('nextPageToken') ? payload.nextPageToken : null

  if (!payload.hasOwnProperty('q') || !payload.q) {
    // No search phrase provided
    commit(types.SHOW_ERROR, lang.errors.badRequest)
    return
  }

  commit(types.VIDEO_REQUEST)

  api.get('/videos', { q: payload.q, nextPageToken: nextPageToken })
    .then(response => {
      let nextPageToken = null
      let videos = []

      if (response.hasOwnProperty('nextPageToken') && response.nextPageToken) {
        nextPageToken = response.nextPageToken
      }

      if (response.hasOwnProperty('items') && response.items) {
        videos = response.items
      }

      commit(types.VIDEO_SUCCESS, {
        'videos': videos,
        'nextPageToken': nextPageToken
      })
    })
    .catch(error => {
      commit(types.SHOW_ERROR, getErrorMessage(error))
    })
}

export const cancel = ({ commit }) => {
  api.cancelRequest('Operation cancelled by user')
  commit(types.HAIKU_SHOW)
}

function getHaiku (response) {
  let haiku = []
  if (response.hasOwnProperty('haiku') && response.haiku) {
    haiku = response.haiku
  }
  return haiku
}

function getCommentsSearched (response) {
  let searched = 0
  if (response.hasOwnProperty('commentsSearched') && response.commentsSearched) {
    searched = response.commentsSearched
  }
  return searched
}

function getErrorMessage (error) {
  var handler = new HttpErrorHandler(error)
  return handler.reason()
}
