import {
  types,
} from '../actions/index';

//reducer for getting all jobs
export default function( state = [], action) {
  switch (action.type) {
    case types.FETCH_ALL_JOBS:
      return action.payload.data.jobs;
    case types.CREATE_JOB:
      return [
        ...state,
        action.payload.data,
      ];
    default:
      return state;
  }
}
