import { merge } from 'lodash';
import {
  RECEIVE_ALL_PROGRAMS,
  RECEIVE_PROGRAM,
  REMOVE_PROGRAM
} from '../actions/program_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let program;
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PROGRAMS:
      return merge({}, state, action.programs);
    case RECEIVE_PROGRAM:
      program = action.payload.program;
      return merge({}, state, { [program.id]: program });
    case REMOVE_PROGRAM:
      delete newState[action.programId];
      return newState;
    default:
      return state;
  }
};
