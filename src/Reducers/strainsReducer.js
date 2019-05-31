
export const strainsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_SATIVA':
      return {...state, sativa: [action]}
    case 'ADD_INDICA':
      return {...state, indica: [action]}
    case 'ADD_HYBRID':
      return {...state, hybrid: [action]}
    default:
        return state 
  }
}

