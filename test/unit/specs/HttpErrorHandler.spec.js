import HttpErrorHandler from 'src/services/HttpErrorHandler'
import lang from 'src/lang/en'

function makeResponse (code) {
  return {
    response: {
      status: code
    }
  }
}

function makeGoogleResponse (code, reason) {
  var obj = makeResponse(code)
  obj.response.data = {
    error: {
      errors: [{ reason: reason }]
    }
  }
  return obj
}

describe('HttpErrorHandler', () => {
  it('has a generic error message for unrecognized error codes', () => {
    const result = new HttpErrorHandler(makeResponse(666))
    expect(result.reason()).to.equal(lang.errors.generic)
  })

  it('has a generic error message if no error response is provided', () => {
    const result = new HttpErrorHandler({})
    expect(result.reason()).to.equal(lang.errors.generic)
  })

  it('has an error message for 400 errors', () => {
    const handler = new HttpErrorHandler(makeResponse(400))
    expect(handler.reason()).to.equal(lang.errors.badRequest)
  })

  it('has an error message for 403 errors', () => {
    const handler = new HttpErrorHandler(makeResponse(403))
    expect(handler.reason()).to.equal(lang.errors.forbidden)
  })

  it('has an error message for 404 errors', () => {
    const handler = new HttpErrorHandler(makeResponse(404))
    expect(handler.reason()).to.equal(lang.errors.notFound)
  })

  it('has an error message if video comments are disabled', () => {
    const handler = new HttpErrorHandler(makeGoogleResponse(403, 'commentsDisabled'))
    expect(handler.reason()).to.equal(lang.errors.commentsDisabled)
  })

  it('has an error message if video is private', () => {
    const handler = new HttpErrorHandler(makeGoogleResponse(403, 'forbidden'))
    expect(handler.reason()).to.equal(lang.errors.forbidden)
  })

  it('has an error message when the google api quote is exceeded', () => {
    const handler = new HttpErrorHandler(makeGoogleResponse(403, 'quotaExceeded'))
    expect(handler.reason()).to.equal(lang.errors.quotaExceeded)
  })
})
