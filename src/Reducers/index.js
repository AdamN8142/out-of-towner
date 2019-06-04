import { combineReducers } from 'redux'
import { strainsReducer } from './strainsReducer';
import { filterReducer } from './filterReducer'
import { descriptionReducer } from './descriptionReducer'

const rootReducer = combineReducers({
  strain: strainsReducer,
  filter: filterReducer,
  description: descriptionReducer
})

export default rootReducer;