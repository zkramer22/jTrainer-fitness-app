import merge from 'lodash/merge';

import { RECEIVE_PROGRAM } from '../actions/program_actions';
import { RECEIVE_ALL_EXERCISES } from '../actions/exercise_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let exercises;

  switch (action.type) {
    case RECEIVE_PROGRAM:
      exercises = action.payload.exercises;
      return merge({}, state, exercises);
    case RECEIVE_ALL_EXERCISES:
      return merge({}, state, action.exercises);
    default:
      return state;
  }
};
