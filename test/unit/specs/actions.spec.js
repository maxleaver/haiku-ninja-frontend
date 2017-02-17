// use require syntax for inline loaders.
// with inject-loader, this returns a module factory
// that allows us to inject mocked dependencies.
const actionsInjector = require('inject-loader!src/store/actions')

// create the module with our mocks
const actions = actionsInjector({
  '../api': {
    getComments (id, token) {
      return { data: { comments: ['comment 1', 'comment 2'] } }
    },

    cancel () {}
  }
})

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
    testAction(actions.submitForm, 'http://www.example.com', {}, [
      { type: 'showError', payload: 'Invalid URL' }
    ], done)
  })

  it('changes status to requesting and fetches comments if a valid video ID is found', done => {
    testAction(actions.submitForm, 'https://www.youtube.com/watch?v=t6kQEsVsp3A', {}, [
      { type: 'showRequesting' }
    ], done)
  })
})

describe('actions.cancelRequest', () => {
  it('cancels an api request', done => {
    testAction(actions.cancelRequest, null, {}, [
      { type: 'showResults' }
    ], done)
  })
})
