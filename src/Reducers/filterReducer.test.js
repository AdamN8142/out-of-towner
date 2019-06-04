import { filterReducer } from './filterReducer'
import * as actions from '../Actions/index'

describe("filterReducer", () => {
  it('should return intital state', () => {
    const expected = ''
    const result = filterReducer('', {})
    expect(result).toEqual(expected)
  })
  it('should set the filter', ()=> {
    const expected = "SATIVA"
    const mockFilter = "SATIVA"
    const result = filterReducer(" ", actions.setFilter(mockFilter))
    expect(result).toEqual(expected)
  })
})