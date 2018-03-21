import {
  GET_SOFTWARE,
} from '../actions/index';

//reducer for getting software
export default function( state = [], action) {
  switch (action.type) {
    case GET_SOFTWARE:
      return action.payload.data.options;
    default:
      return state;
  }
}
