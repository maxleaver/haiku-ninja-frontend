import * as getters from 'src/store/getters'

describe('getters', () => {
  const state = {
    activeHaiku: 0,
    haiku: [
      'one',
      'two'
    ]
  }

  it('returns total haiku count', () => {
    expect(getters.foundHaiku(state)).to.equal(2)
  })

  it('returns true if active haiku is greater than 0', () => {
    let state = { activeHaiku: 2 }
    expect(getters.canDecrement(state)).to.equal(true)

    state.activeHaiku = 0
    expect(getters.canDecrement(state)).to.equal(false)
  })

  it('returns true if active haiku is less than the total haiku count', () => {
    expect(getters.canIncrement(state)).to.equal(true)

    state.activeHaiku = 1
    expect(getters.canIncrement(state)).to.equal(false)
  })
})
