import * as getters from 'src/store/getters'

describe('getters', () => {
  it('returns total comment count', () => {
    const state = {
      comments: [
        'comment 1',
        'comment 2'
      ]
    }

    expect(getters.foundRecords(state)).to.equal(2)
  })

  it('returns true if active comment is greater than 0', () => {
    let state = { activeComment: 2 }
    expect(getters.canDecrement(state)).to.equal(true)

    state.activeComment = 0
    expect(getters.canDecrement(state)).to.equal(false)
  })

  it('returns true if active comment is less than the total number of comments', () => {
    const state = {
      activeComment: 0,
      comments: [
        'comment 1',
        'comment 2'
      ]
    }

    expect(getters.canIncrement(state)).to.equal(true)

    state.activeComment = 1
    expect(getters.canIncrement(state)).to.equal(false)
  })
})
