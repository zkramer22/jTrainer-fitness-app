import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    currentUser: currentUser,
    type: RECEIVE_CURRENT_USER
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = (errors) => {
  return {
    errors: errors,
    type: RECEIVE_SESSION_ERRORS
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then(((currentUser) => dispatch(receiveCurrentUser(currentUser))), ((errors) => dispatch(receiveErrors(errors))));
  };
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)), (errors) => dispatch(receiveErrors(errors)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
  };
};
