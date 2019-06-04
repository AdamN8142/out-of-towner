import { combineReducers } from 'redux'
import { strainsReducer } from './strainsReducer';
import { filterReducer } from './filterReducer'
import { descriptionReducer } from './descriptionReducer'
import { effectsReducer } from './effectsReducer'

const rootReducer = combineReducers({
  strain: strainsReducer,
  filter: filterReducer,
  description: descriptionReducer,
  effects: effectsReducer
})

export default rootReducer;