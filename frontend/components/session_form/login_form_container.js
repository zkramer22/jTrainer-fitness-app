import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session.responseJSON || [],
    formType: 'log in',
    navLink: <Link to="/signup">Sign Up</Link>
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    guestLogin: () => dispatch(login({ email_address: "abc@123.com", password: "asdfgh" })),
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
