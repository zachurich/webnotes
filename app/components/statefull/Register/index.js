/*
This component houses the 'RegisterForm' component and is responsible for
taking in user data, and creating appropriate route params
*/

/* TODO: Create a Register Component and a login component */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import base from '../../../config/base';
import RegisterForm from '../../stateless/RegisterForm/';

import { transition, errCatch, secureUsername } from '../../helpers';

class Register extends React.Component {
    constructor() {
      super();

      this.state = {
        validation: false,
        error: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
      transition(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        const username = this.username.value.toLowerCase();
        const email = this.email.value;
        const password = this.password.value;
        let errorCode;
        let errorMessage;
        if (username.length > 1) {
          base.auth()
            .createUserWithEmailAndPassword(email, password)
              // Returns success
              .then((success) => {
                const user = base.auth().currentUser;
                // Update profile's display name with 'username' input value
                user.updateProfile({
                    displayName: secureUsername(username),
                })
                this.context.router.push(`/login`);
              })
              // Returns Error
              .catch((error) => this.setState(errCatch(error)));
        } else {
          errorMessage = "You must enter a username."
          this.setState({
            validation: true,
            error: errorMessage
          });
        }
    }
    render() {
        return (
            <div>
                <RegisterForm
                  validation={ this.state.validation }
                  errorMessage={ this.state.error }
                  userSubmit={ this.handleSubmit }
                  username={ (input) => this.username = input }
                  email={ (input) => this.email = input }
                  password={ (input) => this.password = input } />
            </div>
        )
    }
}

Register.contextTypes = {
    router: React.PropTypes.object
}

export default Register;
