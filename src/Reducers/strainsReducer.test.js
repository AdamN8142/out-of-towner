import { strainsReducer } from './strainsReducer'
import * as actions from '../Actions/index'
import { statement } from '@babel/template';

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
    const initialState = {
      sativa: [],
      indica: [],
      hybrid: []
    }
    const action = {
      type:'ADD_SATIVA', 
      sativa: 
        [{name:'bobby'}]
    
  }
    const expected = {
      sativa: [{name:'bobby'}],
      indica: [],
      hybrid: []
    }
  
    const result = strainsReducer(initialState, action)
    expect(result).toEqual(expected)

  })
})


