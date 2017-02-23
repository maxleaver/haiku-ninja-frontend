import * as actions from 'src/store/actions'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import lang from 'src/lang/en'

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
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

describe('actions.submitForm', () => {
  it('throws an error if no video url is provided', done => {
    testAction(actions.submitForm, null, {}, [
      { type: 'showError', payload: 'Invalid URL' }
    ], done)
  })

  it('throws an error if a video id cannot be parsed from a url', done => {
    testAction(actions.submitForm, null, { videoUrl: 'http://www.example.com' }, [
      { type: 'showError', payload: 'Invalid URL' }
    ], done)
  })

  it('changes status to requesting and fetches comments if a valid video ID is found', done => {
    testAction(actions.submitForm, null, { videoUrl: 'https://www.youtube.com/watch?v=t6kQEsVsp3A' }, [
      { type: 'showRequesting' }
    ], done)
  })
})

describe('actions.fetchComments', () => {
  it('shows an error if no id is provided', done => {
    testAction(actions.fetchComments, {}, null, [{ type: 'showError', payload: lang.errors.badRequest }], done)
  })

  it('shows the correct error for 400 errors', done => {
    const mock = new MockAdapter(axios)
    mock.onGet(process.env.API_URI).reply(400, {})

    testAction(actions.fetchComments, { id: 'no_results' }, null,
      [{ type: 'showError', payload: lang.errors.badRequest }],
      done
    )

    mock.restore()
  })

  it('shows the correct error for 404 errors', done => {
    const mock = new MockAdapter(axios)
    mock.onGet(process.env.API_URI).reply(404, {})

    testAction(actions.fetchComments, { id: 'no_results' }, null,
      [{ type: 'showError', payload: lang.errors.notFound }],
      done
    )

    mock.restore()
  })

  it('shows the correct error for 400 errors', done => {
    const mock = new MockAdapter(axios)
    mock.onGet(process.env.API_URI).reply(400, {})

    testAction(actions.fetchComments, { id: 'no_results' }, null,
      [{ type: 'showError', payload: lang.errors.badRequest }],
      done
    )

    mock.restore()
  })

  it('shows results if no comments returned', done => {
    const mock = new MockAdapter(axios)
    mock.onGet(process.env.API_URI).reply(200, {})

    testAction(actions.fetchComments, { id: 'no_results' }, null,
      [{ type: 'showResults' }],
      done
    )

    mock.restore()
  })

  it('appends haiku if some are found', done => {
    const mock = new MockAdapter(axios)
    mock.onGet(process.env.API_URI).reply(200, {
      commentsSearched: 100,
      haiku: ['comment 1', 'comment 2']
    })

    testAction(actions.fetchComments, { id: 'success' }, null,
      [
        { type: 'appendComments', payload: ['comment 1', 'comment 2'] },
        { type: 'incrementSearched', payload: 100 },
        { type: 'showResults' }
      ],
      done
    )

    mock.restore()
  })

  it('appends haiku and fetches again if haiku found and a next page token is provided', done => {
    const mock = new MockAdapter(axios)
    mock.onGet(process.env.API_URI).reply(200, {
      commentsSearched: 100,
      haiku: ['comment 1', 'comment 2'],
      nextPageToken: 'some token'
    })

    testAction(actions.fetchComments, { id: 'success_next' }, null,
      [
        { type: 'appendComments', payload: ['comment 1', 'comment 2'] },
        { type: 'incrementSearched', payload: 100 }
      ],
      done
    )

    mock.restore()
  })
})

describe('actions.cancelRequest', () => {
  it('cancels an api request', done => {
    testAction(actions.cancelRequest, null, {}, [
      { type: 'showResults' }
    ], done)
  })
})
