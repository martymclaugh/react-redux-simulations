import { combineReducers } from 'redux';
import getSoftwareReducer from './reducer_get_software';

const rootReducer = combineReducers({
  software: getSoftwareReducer,
});

export default rootReducer;
