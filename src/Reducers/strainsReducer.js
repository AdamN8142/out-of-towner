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
    case 'ADD-DESCRIPTION':
      const withDescription = state[action.filter].map((bud)=> {
        if(bud.id === action.id) {
          return {...bud, description: action.description}
        } else {
          return bud
        }
      })
        return {...state, [action.filter]: withDescription}
    default:
        return state 
  }
}

