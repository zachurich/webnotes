/*
This component houses the 'LoginForm' component and is responsible for
taking in user data, and creating appropriate route params
*/

/* TODO: Create a Register Component and a login component */

import React from "react";
import ReactDOM from "react-dom";
import { base, app } from "../../../config/base";
import LoginForm from "../../stateless/LoginForm/";

import { handleMessage, transition } from "../../helpers";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      validation: false,
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setupUserInfo = this.setupUserInfo.bind(this);
  }
  componentDidMount() {
    transition(this);
  }
  setupUserInfo() {
    const user = app.auth().currentUser;
    // Check for existing user data and grab the username to use for
    // user's unique notes route
    if (user != null) {
      user.providerData.forEach(profile => {
        this.context.router.push(`/notes/${profile.displayName}`);
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    // get the data from the input
    const email = this.email.value;
    const password = this.password.value;

    /*
          Using an arrow function here allows 'this' to remain properly bound.
          The syntax used before was 'cont authHandler = function authHandler(...)'
          which resulted in 'this' being rebound
        */
    const authHandler = (error, email) => {
      error
        ? this.setState({
            validation: true,
            error: handleMessage(error.code)
          })
        : this.setupUserInfo();
    };

    // Simple email/password authentication
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        authHandler();
      });
  }
  render() {
    return (
      <div>
        <LoginForm
          validation={this.state.validation}
          errorMessage={this.state.error}
          userSubmit={this.handleSubmit}
          email={input => {
            this.email = input;
          }}
          password={input => {
            this.password = input;
          }}
        ></LoginForm>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
};

export default Login;
