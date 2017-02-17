export const foundRecords = (state) => {
  return state.comments.length
}

export const canDecrement = (state) => {
  return state.activeComment > 0
}

export const canIncrement = (state) => {
  return state.activeComment < (state.comments.length - 1)
}
