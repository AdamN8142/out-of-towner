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
  
})
