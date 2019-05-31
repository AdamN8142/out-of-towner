const initialState = {
  sativa: [],
  indica: [],
  hybrid: []
}
export const strainsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SATIVA':
      return {...state, sativa: [action.sativa]}
    case 'ADD_INDICA':
      return {...state, indica: [action.indica]}
    case 'ADD_HYBRID':
      return {...state, hybrid: [action.hybrid]}
    default:
        return state 
  }
}

