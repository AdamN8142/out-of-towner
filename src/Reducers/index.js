import { combineReducers } from 'redux'
import { strainsReducer } from './strainsReducer';
import { filterReducer } from './filterReducer'

const rootReducer = combineReducers({
  strain: strainsReducer,
  filter: filterReducer
})

export default rootReducer;