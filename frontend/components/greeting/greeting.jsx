import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const Greeting = ({ currentUser, guestLogin, logout }) => {

  return (
    <div id="greeting-container">
      <p>
        A tool for trainers. Build and edit workout programs, invite your athletes, monitor their goals and progress.
      </p>
      <br/>
      <br/>
      <Link id="signup" className="greeting-button" to="/signup">Sign Up</Link>
      <div id="account-question">-- ALREADY HAVE AN ACCOUNT? --</div>
      <Link id="login" className="greeting-button" to="/login">Log In</Link>

    </div>
  );
};

const msp = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    guestLogin: () => dispatch(login({ email_address: "abc@123.com", password: "asdfgh" })),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Greeting);
