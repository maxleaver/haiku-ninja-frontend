import lang from 'src/lang/en'

export default function (error) {
  const errorMap = {
    400: lang.errors.badRequest,
    401: lang.errors.forbidden,
    403: lang.errors.forbidden,
    404: lang.errors.notFound
  }

  const reasonMap = {
    operationNotSupported: '',
    processingFailure: '',
    incompatibleParameters: '',
    invalidFilters: '',
    invalidPageToken: '',
    missingRequiredParameter: '',
    unexpectedParameter: '',
    unexpectedPart: '',
    unknownPart: '',
    commentsDisabled: lang.errors.commentsDisabled,
    forbidden: lang.errors.forbidden,
    quotaExceeded: lang.errors.quotaExceeded,
    videoNotFound: lang.errors.notFound
  }

  this.reason = function () {
    const hasResponse = resolve(error, 'response')
    const hasStatus = resolve(error, 'response.status')
    const hasGoogleResponse = resolve(error, 'response.data.error.errors')
    var reason

    // Use google response data to get a specific error response
    if (hasResponse && hasGoogleResponse) {
      reason = reasonMap[error.response.data.error.errors[0].reason]

      if (reason) {
        return reason
      }
    }

    // Use status code to get a general error response
    if (hasResponse && hasStatus) {
      reason = errorMap[error.response.status]

      if (reason) {
        return reason
      }
    }

    // Something happened during request setup that triggered the Error
    return lang.errors.generic
  }

  function resolve (obj, prop) {
    let parts = prop.split('.')

    for (var i = 0, l = parts.length; i < l; i++) {
      var part = parts[i]

      if (obj !== null && typeof obj === 'object' && part in obj) {
        obj = obj[part]
      } else {
        return false
      }
    }

    return true
  }
}
