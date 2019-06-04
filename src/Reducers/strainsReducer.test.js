import { strainsReducer } from './strainsReducer'
import * as actions from '../Actions/index'

describe('strainsReducer', () => {
  it('should return initial state', () => {
    const intialState = {
      sativa: [],
      indica: [],
      hybrid: []
    }
    const expected = {
      sativa: [],
      indica: [],
      hybrid: []
    }
    const result = strainsReducer(intialState, {})
    expect(result).toEqual(expected)
  })

  it('should update state of sativa', () => {
    const intialState = {
      sativa: [],
      indica: [],
      hybrid: []
    }
    const action = {
      type:'ADD_SATIVA', 
      sativa: 
        {name:'bobby'}
    
  }
    const expected = [
      {sativa: {name:'bobby'}
    }
  ]
    const result = strainsReducer({} , action)
    expect(result).toEqual(expected)

  })
})


// it('should return pokemon', () => {
//   const action = {type:'ADD_POKEMON', pokemon:[{reptar: 'says hi'}, {nope: 'say hi too'}]}
//   const expected = [{reptar: 'says hi'}, {nope: 'say hi too'}]
//   const result = pokemonReducer([], action)
//   expect(result).toEqual(expected)
// })
// })