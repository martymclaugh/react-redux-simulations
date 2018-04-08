import { types } from '../actions/index';

//reducer for getting software
export default function( state = [], action) {
  switch (action.type) {
    case types.GET_SOFTWARE:
      return action.payload.data.options;
    default:
      return state;
  }
}
