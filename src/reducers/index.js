import { combineReducers } from 'redux';
import getSoftwareReducer from './reducer_get_software';
import getHardwareReducer from './reducer_get_hardware';
import getJobsReducer from './reducer_jobs';


const rootReducer = combineReducers({
  software: getSoftwareReducer,
  hardware: getHardwareReducer,
  jobs: getJobsReducer,
});

export default rootReducer;
