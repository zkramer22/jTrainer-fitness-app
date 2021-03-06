import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session.responseJSON || [],
    formType: 'sign up',
    navLink: <Link to="/login">Log In</Link>
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
