import {
  GET_HARDWARE,
} from '../actions/index';

//reducer for getting hardware
export default function( state = [], action) {
  switch (action.type) {
    case GET_HARDWARE:
      return action.payload.data.options;
    default:
      return state;
  }
}
