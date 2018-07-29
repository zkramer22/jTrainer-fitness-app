import React from 'react';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateEmail(e) {
    this.setState({ email_address: e.currentTarget.value });
  }

  updatePassword(e) {
    this.setState({ password: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        { this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        )) }
      </ul>
    );
  }

  render() {
    // const guestLogin = this.props.formType === "log in" ? (
    //   <span
    //     id="guest-login"
    //     onClick={ () => this.props.guestLogin() }>Guest Login
    //   </span>
    // ) : (
    //   <span></span>
    // );

    return (
      <div id="session-form-container">

        <form
          id="session-form" className=""
          onSubmit={ this.handleSubmit }>

          <input
            id="email-input"
            className="session-form-input"
            type="text"
            value={ this.state.email_address }
            onChange={ this.updateEmail }
            placeholder="email address"
            autoFocus="autofocus"/>

          <input
            id="password-input"
            className="session-form-input"
            type="password"
            value={ this.state.password }
            onChange={ this.updatePassword }
            placeholder="password"/>

          <input
            id="submit-button"
            className="session-form-input"
            type="submit"
            value={ this.props.formType } />

          <div id="session-link">
            or <strong>{ this.props.navLink }</strong>
          </div>

        </form>

        <div id="session-errors">
          { this.renderErrors() }
        </div>

        {/*
          { guestLogin }
          */}
      </div>
    );
  }
}

export default withRouter(SessionForm);
