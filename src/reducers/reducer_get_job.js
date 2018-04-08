import {
  types,
} from '../actions/index';

//reducer for getting job
export default function( state = {}, action) {
  switch (action.type) {
    case types.FETCH_JOB:
      return action.payload.data;
    default:
      return state;
  }
}
