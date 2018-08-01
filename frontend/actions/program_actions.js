import * as APIUtil from '../util/program_api_util';

export const RECEIVE_ALL_PROGRAMS = "RECEIVE_ALL_PROGRAMS";
export const RECEIVE_PROGRAM = "RECEIVE_PROGRAM";
export const REMOVE_PROGRAM = "REMOVE_PROGRAM";

export const receiveAllPrograms = programs => {
  return {
    type: RECEIVE_ALL_PROGRAMS,
    programs
  };
};

export const receiveSingleProgram = payload => {
  return {
    type: RECEIVE_PROGRAM,
    payload
  };
};

export const removeProgram = programId => {
  return {
    type: REMOVE_PROGRAM,
    programId
  };
};

export const requestAllPrograms = () => dispatch => {
  return APIUtil.fetchAllPrograms().then(programs => {
    return dispatch(receiveAllPrograms(programs));
  });
};

export const requestSingleProgram = id => dispatch => {
  return APIUtil.fetchProgram(id).then(program => {
    return dispatch(receiveSingleProgram(program));
  });
};

export const createProgram = program => dispatch => {
  return APIUtil.createProgram(program).then(program => {
    return dispatch(receiveSingleProgram(program));
  });
};

export const deleteProgram = programId => dispatch => {
  return APIUtil.deleteProgram(programId).then(program => {
    return dispatch(removeProgram(programId));
  });
};
