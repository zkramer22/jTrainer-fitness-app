import merge from 'lodash/merge';

import { RECEIVE_PROGRAM } from '../actions/program_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let exercises;

  switch (action.type) {
    case RECEIVE_PROGRAM:
      exercises = action.payload.exercises;
      return merge({}, state, exercises);
    default:
      return state;
  }
};
