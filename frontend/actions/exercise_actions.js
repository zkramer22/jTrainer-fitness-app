import * as APIUtil from '../util/exercise_api_util';

export const RECEIVE_ALL_EXERCISES = "RECEIVE_ALL_EXERCISES";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";

export const receiveAllExercises = exercises => {
  return {
    type: RECEIVE_ALL_EXERCISES,
    exercises
  };
};

export const removeExercise = exerciseId => {
  return {
    type: REMOVE_EXERCISE,
    exerciseId
  };
};

export const requestAllExercises = () => dispatch => {
  return APIUtil.fetchAllExercises().then(exercises => {
    return dispatch(receiveAllExercises(exercises));
  });
};

export const createExercise = exercise => dispatch => {
  return APIUtil.createExercise(exercise).then(exercise => {
    return dispatch(receiveSingleExercise(exercise));
  });
};

export const deleteExercise = exerciseId => dispatch => {
  return APIUtil.deleteExercise(exerciseId).then(exercise => {
    return dispatch(removeExercise(exerciseId));
  });
};
