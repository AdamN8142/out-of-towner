export const flavorReducer = (state= [], action ) => {
  switch(action.type) {
    case 'ADD_FLAVORS':
      return action.flavors
    default:
      return state
  }
}