import { combineReducers } from 'redux';

import users from './users_reducer';
import programs from './programs_reducer';
import exercises from './exercises_reducer';
import days from './days_reducer';
import weeks from './weeks_reducer';
import dayExercises from './day_exercise_reducer';

export default combineReducers({
  users,
  programs,
  weeks,
  days,
  exercises,
  dayExercises
});
