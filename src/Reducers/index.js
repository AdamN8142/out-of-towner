import { combineReducers } from 'redux'
import { strainsReducer } from './strainsReducer';
import { filterReducer } from './filterReducer'
import { descriptionReducer } from './descriptionReducer'
import { effectsReducer } from './effectsReducer'
import { flavorReducer } from './flavorReducer';

const rootReducer = combineReducers({
  strain: strainsReducer,
  filter: filterReducer,
  description: descriptionReducer,
  effects: effectsReducer,
  flavors: flavorReducer
})

export default rootReducer;