import * as actions from 'src/store/actions'
import * as types from 'src/store/mutation-types'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import lang from 'src/lang/en'

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)

      if (payload) {
        expect(mutation.payload).to.deep.equal(payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions.decrementHaiku', () => {
  const action = actions.decrementHaiku

  it('decrements the active haiku', done => {
    const expectedMutations = [{ type: types.DECREMENT_HAIKU }]
    testAction(action, null, {}, expectedMutations, done)
  })
})

describe('increments the active haiku', () => {
  const action = actions.incrementHaiku

  it('increments the active haiku', done => {
    const expectedMutations = [{ type: types.INCREMENT_HAIKU }]
    testAction(action, null, {}, expectedMutations, done)
  })
})

describe('actions.updateForm', () => {
  const action = actions.updateForm

  it('updates the form contents', done => {
    const payload = {
      target: {
        value: 'form content'
      }
    }
    const expectedMutations = [{ type: types.UPDATE_FORM, payload: 'form content' }]
    testAction(action, payload, {}, expectedMutations, done)
  })
})

describe('actions.resetApp', () => {
  const action = actions.resetApp

  it('resets the application to the initial state', done => {
    const expectedMutations = [{ type: types.RESET_APP }]
    testAction(action, null, {}, expectedMutations, done)
  })
})

describe('actions.submitForm', () => {
  const action = actions.submitForm

  it('displays an error if the form field is empty', done => {
    const expectedMutations = [{ type: types.SHOW_ERROR, payload: lang.errors.noInput }]
    testAction(action, null, {}, expectedMutations, done)
  })

  it('searches for haiku if a valid video ID is found', done => {
    const payload = { formInput: 'https://www.youtube.com/watch?v=t6kQEsVsp3A' }
    const expectedMutations = [
      { type: types.CLEAR_RESULTS },
      { type: types.HAIKU_REQUEST }
    ]
    testAction(action, null, payload, expectedMutations, done)
  })

  it('searches for videos if form input is not a valid url', done => {
    const payload = { formInput: 'some string' }
    const expectedMutations = [
      { type: types.CLEAR_RESULTS },
      { type: types.VIDEO_REQUEST }
    ]
    testAction(action, null, payload, expectedMutations, done)
  })
})

describe('actions.fetchHaiku', () => {
  const action = actions.fetchHaiku
  const url = process.env.API_URI + '/comments'
  const payload = { id: 'some id' }
  var mock

  beforeEach(function () {
    mock = new MockAdapter(axios)
  })

  it('shows an error if no id is provided', done => {
    const expectedMutations = [{ type: types.SHOW_ERROR, payload: lang.errors.badRequest }]

    testAction(action, {}, null, expectedMutations, done)
  })

  it('shows an error if the request fails', done => {
    const expectedMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.SHOW_ERROR, payload: lang.errors.badRequest }
    ]

    mock.onGet(url).reply(400)
    testAction(action, payload, null, expectedMutations, done)
  })

  it('shows an error if a video does not exist', done => {
    const expectedMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.SHOW_ERROR, payload: lang.errors.notFound }
    ]

    mock.onGet(url).reply(404)
    testAction(action, payload, null, expectedMutations, done)
  })

  it('displays results even if no haiku are returned', done => {
    const expectedMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.HAIKU_SUCCESS, payload: { haiku: [], searched: 0 } },
      { type: types.HAIKU_SHOW }
    ]

    mock.onGet(url).reply(200, {})
    testAction(action, payload, null, expectedMutations, done)
  })

  it('displays results if no response is received', done => {
    const expectedMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.HAIKU_SHOW }
    ]

    mock.onGet(url).reply(200, null)
    testAction(action, payload, null, expectedMutations, done)
  })

  it('appends haiku and displays results if they are found', done => {
    const expectedMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.HAIKU_SUCCESS, payload: { haiku: ['one', 'two'], searched: 100 } },
      { type: types.HAIKU_SHOW }
    ]
    const responseBody = {
      commentsSearched: 100,
      haiku: ['one', 'two']
    }

    mock.onGet(url).reply(200, responseBody)
    testAction(action, payload, null, expectedMutations, done)
  })

  it('appends haiku and fetches again if haiku found and a next page token is provided', done => {
    const firstRunMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.HAIKU_SUCCESS, payload: { haiku: ['one', 'two'], searched: 100 } }
    ]
    const secondRunMutations = [
      { type: types.HAIKU_REQUEST },
      { type: types.HAIKU_SUCCESS, payload: { haiku: ['three'], searched: 100 } },
      { type: types.HAIKU_SHOW }
    ]
    const responseBody = {
      commentsSearched: 100,
      haiku: ['one', 'two'],
      nextPageToken: 'some token'
    }

    mock
      .onGet(url).replyOnce(200, responseBody)
      .onGet(url).replyOnce(200, { commentsSearched: 100, haiku: ['three'] })

    testAction(action, payload, null, firstRunMutations, done)
    testAction(action, payload, null, secondRunMutations, done)
  })
})

describe('actions.fetchVideos', () => {
  const action = actions.fetchVideos
  const url = process.env.API_URI + '/videos'
  const payload = { q: 'some search phrase' }
  const response = {
    items: [
      {
        id: 1,
        title: 'Some title',
        'description': 'Some description'
      },
      {
        id: 2,
        title: 'Another title',
        'description': 'Another description'
      }
    ],
    totalResults: 2,
    resultsPerPage: 50,
    nextPageToken: 'abc123'
  }
  var mock

  beforeEach(function () {
    mock = new MockAdapter(axios)
  })

  it('shows an error if no search terms are provided', done => {
    const expectedMutations = [{ type: types.SHOW_ERROR, payload: lang.errors.badRequest }]

    mock.onGet(url).reply(400)
    testAction(actions.fetchVideos, {}, null, expectedMutations, done)
  })

  it('shows an error if the request fails', done => {
    const expectedMutations = [
      { type: types.VIDEO_REQUEST },
      { type: types.SHOW_ERROR, payload: lang.errors.badRequest }
    ]

    mock.onGet(url).reply(400)
    testAction(action, payload, null, expectedMutations, done)
  })

  it('shows results page even if no results are returned', done => {
    const expectedMutations = [
      { type: types.VIDEO_REQUEST },
      { type: types.VIDEO_SUCCESS, payload: { videos: [], nextPageToken: null } }
    ]

    mock.onGet(url).reply(200, {})
    testAction(action, payload, { showVideos: false }, expectedMutations, done)
  })

  it('shows video search results if it is the first set of results', done => {
    const expectedMutations = [
      { type: types.VIDEO_REQUEST },
      { type: types.VIDEO_SUCCESS, payload: { videos: response.items, nextPageToken: 'abc123' } }
    ]

    mock.onGet(url).reply(200, response)
    testAction(action, payload, { showVideos: false }, expectedMutations, done)
  })

  it('appends additional video results if a search was previous performed', done => {
    const expectedMutations = [
      { type: types.VIDEO_REQUEST },
      { type: types.VIDEO_SUCCESS, payload: { videos: response.items, nextPageToken: 'abc123' } }
    ]

    mock.onGet(url).reply(200, response)
    testAction(action, payload, { showVideos: true }, expectedMutations, done)
  })
})

describe('actions.showVideoResults', () => {
  const action = actions.showVideoResults

  it('shows the video search results', done => {
    const expectedMutations = [
      { type: types.HAIKU_CLEAR },
      { type: types.VIDEO_SHOW }
    ]
    testAction(action, null, {}, expectedMutations, done)
  })
})

describe('actions.cancel', () => {
  const action = actions.cancel

  it('cancels an api request', done => {
    const expectedMutations = [{ type: types.HAIKU_SHOW }]
    testAction(action, null, {}, expectedMutations, done)
  })
})
