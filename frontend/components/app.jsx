import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Greeting from './greeting/greeting';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Dashboard from './dashboard';

import { AuthRoute } from '../util/route_util';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">jTrainer</h1>
      </header>

      <AuthRoute
        exact path="/"
        component={ Greeting }/>
      <AuthRoute
        exact path="/login"
        component={ LogInFormContainer } />
      <AuthRoute
        exact path="/signup"
        component={ SignUpFormContainer } />
      </div>
  );
};

export default App;
