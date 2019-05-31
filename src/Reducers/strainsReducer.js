
export const strainsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_SATIVA':
      return {...state, sativa: action.results}
    case 'ADD_INDICA':
      return {...state, indica: action.results}
    case 'ADD_HYBRID':
      return {...state, hybrid: action.results}
    default:
        return state 
  }
}

