import { effectsReducer } from './effectsReducer'
import * as actions from '../Actions/index'

describe('effectsReducer', () => {
  it('should return intital state', () => {
    const expected = ''
    const result = effectsReducer('', {})
    expect(result).toEqual(expected)
  })
  it('should return effects of marijuana', () => {
    const expected = {
      happy:['ya','sometimes'],
      sad: ['no', 'not all the time']
    }
    const mockEffects = {
      happy:['ya','sometimes'],
      sad: ['no', 'not all the time']
    }
    const result = effectsReducer({}, actions.addEffects(mockEffects))
    expect(result).toEqual(expected)
  })
  
})