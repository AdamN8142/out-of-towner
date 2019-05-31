export const strainsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_SATIVA':
    return {...state, sativa: action.results}
  }
}