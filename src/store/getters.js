export const foundHaiku = (state) => {
  return state.haiku.length
}

export const canDecrement = (state) => {
  return state.activeHaiku > 0
}

export const canIncrement = (state) => {
  return state.activeHaiku < (state.haiku.length - 1)
}
