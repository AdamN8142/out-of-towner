import { flavorReducer } from './flavorReducer'
import * as actions from '../Actions/index'

describe('flavorReducer', () => {
  it('should return intital state', () => {
    const expected = []
    const result = flavorReducer([], {})
    expect(result).toEqual(expected)
  })
  it('should add some flavor', () => {
    const expected = ['one', 'two']
    const mockFlavor = ['one', 'two']
    const result = flavorReducer([], actions.addFlavors(mockFlavor))
    expect(result).toEqual(expected)
  })
})