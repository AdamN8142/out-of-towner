export const descriptionReducer = (state = '' , action) => {
  switch(action.type) {
    case 'ADD_DESCRIPTION':
      return action.description
    default:
      return state
  }
}