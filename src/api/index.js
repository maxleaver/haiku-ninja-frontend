import axios from 'axios'
import HttpErrorHandler from 'src/services/HttpErrorHandler'
var CancelToken = axios.CancelToken
var cancelRequest

export function getComments (id, nextPageToken) {
  // Make call to API resource
  return axios.get(process.env.API_URI, {
    params: {
      id: id,
      nextPageToken: nextPageToken || null,
      type: 'youtube'
    },
    cancelToken: new CancelToken(function executor (c) {
      // An executor function receives a cancel function as a parameter
      cancelRequest = c
    }),
    headers: { 'Authorization': 'Bearer ' + process.env.JWT_TOKEN }
  })
  .catch((error) => {
    var handler

    if (axios.isCancel(error)) {
      // Request was cancelled by user
      return
    }

    // Get error message to pass to frontend
    handler = new HttpErrorHandler(error)
    throw new Error(handler.reason())
  })
}

/**
 * Manually cancel an axios AJAX request
 */
export function cancel () {
  return cancelRequest('Operation cancelled by user')
}
