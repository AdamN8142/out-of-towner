export const flavorReducer = (state= [], action ) => {
  switch(action.type) {
    case 'ADD_FLAVOR':
      return action.flavor
    default:
      return state
  }
}