
const initialState = {
  sativa: [],
  indica: [],
  hybrid: []
}


//if i change [action.filter] to a specific strain, it will ren the action but the state of the strain is not updated with a description 


export const strainsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SATIVA':
      return {...state, sativa: action.sativa}
    case 'ADD_INDICA':
      return {...state, indica: action.indica}
    case 'ADD_HYBRID':
      return {...state, hybrid: action.hybrid}
    default:
        return state 
  }
}




    // case 'ADD_DESCRIPTION':
    //   const withDescription = state.hybrid.map((bud)=> {
    //     console.log(bud.id)
    //     console.log(action.id)
    //       if(bud.id == parseInt(action.id)) {
    //         return{...bud, description: action.desc}
    //       }else {
    //         return bud
    //       }
    //     })
    //     return {...state, hybrid: withDescription}