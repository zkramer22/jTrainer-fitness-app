import { merge } from 'lodash';
import { RECEIVE_PROGRAM } from '../actions/program_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROGRAM:
      return merge({}, state, action.payload.weeks);
    default:
      return state;
  }
};
