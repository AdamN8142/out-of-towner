import { loadingReducer } from './loadingReducer'
import * as actions from '../Actions/index'

describe('loadingReducer', () => {
  it('should return intital state', () => {
    const expected = false
    const result = loadingReducer(false, {})
    expect(result).toEqual(expected)
  })
  it('should return a boolean', () => {
    const expected = true;
    const mockBool = true;
    const result = loadingReducer(false, actions.isLoading(mockBool))
    expect(result).toEqual(expected)
  })
})