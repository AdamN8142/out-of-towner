const intitialState = {
  desc: '',
  effects: {}
}

export const descriptionReducer = (state = '' , action) => {
  switch(action.type) {
    case 'ADD_DESC':
      return {...state, desc: action.desc}
  }
}