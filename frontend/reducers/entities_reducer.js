import { combineReducers } from 'redux';

import users from './users_reducer';
import programs from './programs_reducer';

export default combineReducers({
  users,
  programs
});
