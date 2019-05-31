import { combineReducers } from 'redux'
import { strainsReducer } from './strainsReducer';

const rootReducer = combineReducers({
  strain: strainsReducer
})

export default rootReducer;