import { descriptionReducer } from './descriptionReducer'
import * as actions from '../Actions/index'

describe('descriptionReducer', () => {
  it('should return intital state', () => {
    const expected = ''
    const result = descriptionReducer('', {})
    expect(result).toEqual(expected)
  })
  it('should return a description', () => {
    const expected = 'Hello friends!'
    const mockDescription = 'Hello friends!'
    const result = descriptionReducer('', actions.addDescription(mockDescription))
    expect(result).toEqual(expected)
  })
})