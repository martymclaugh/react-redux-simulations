import {
  types,
} from '../actions/index';

//reducer for getting all jobs
export default function( state = [], action) {
  switch (action.type) {
    case types.FETCH_ALL_JOBS:
      return [
        ...state,
        ...action.payload.data.jobs,
      ]
    default:
      return state;
  }
}
