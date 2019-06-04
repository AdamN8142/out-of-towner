export const effectsReducer = (state= {}, action) => {
  switch(action.type) {
    case 'ADD_EFFECTS':
      return action.effects
    default:
      return state
  }
}