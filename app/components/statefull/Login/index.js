/*
This component houses the 'LoginForm' component and is responsible for
taking in user data, and creating appropriate route params
*/

/* TODO: Create a Register Component and a login component */

import React from 'react';
import ReactDOM from 'react-dom';
import base from '../../../config/base';
import LoginForm from '../../stateless/LoginForm/'

class Login extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    setupUserInfo() {
      const user = base.auth().currentUser;
      // Check for existing user data and grab the username to use for
      // user's unique notes route
      if (user != null) {
        user.providerData.forEach( profile => {
          const username = profile.displayName;
          this.context.router.push(`/notes/${username}`);
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
          if (error) console.log(error);
            else this.setupUserInfo();
        }

        // Simple email/password authentication
        base.authWithPassword({
            email: email,
            password: password,
        }, authHandler);
    }
    render() {
        return (
          <LoginForm
            userSubmit={this.handleSubmit}
            email={(input) => { this.email = input }}
            password={(input) => { this.password = input }}
          />
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
}

export default Login;
