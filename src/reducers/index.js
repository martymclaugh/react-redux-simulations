import { combineReducers } from 'redux';
import getSoftwareReducer from './reducer_get_software';
import getHardwareReducer from './reducer_get_hardware';
import getJobsReducer from './reducer_get_jobs';
import getJobReducer from './reducer_get_job';

const rootReducer = combineReducers({
  software: getSoftwareReducer,
  hardware: getHardwareReducer,
  jobs: getJobsReducer,
  job: getJobReducer,
});

export default rootReducer;
