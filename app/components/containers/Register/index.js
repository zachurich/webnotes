/*
This component houses the 'RegisterForm' component and is responsible for
taking in user data, and creating appropriate route params
*/

/* TODO: Create a Register Component and a login component */

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import base from '../../../config/base';
import RegisterForm from '../../presentationals/RegisterForm/'

class Register extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
      const elem = ReactDOM.findDOMNode(this);
      elem.style.opacity = 0;
      elem.style.transform = "translateY(100px)";
      window.requestAnimationFrame(function() {
          elem.style.transition = "all 500ms";
          elem.style.opacity = 1;
          elem.style.transform = "translateY(0px)";
      });
    }
    handleSubmit(e) {
        e.preventDefault();

        const username = this.username.value;
        const email = this.email.value;
        const password = this.password.value;
        if( username.length > 1 && email.length > 10 && password.length > 3) {

          base.auth()
            .createUserWithEmailAndPassword(email, password)
              // Returns success
              .then((success) => {
                console.log('Success!');
                const user = base.auth().currentUser;
                // Update profile's display name with 'username' input value
                user.updateProfile({
                    displayName: username,
                  })
                .then(() => {
                  if (user != null) {
                    console.log(user);
                    user.providerData.forEach( (profile) => {});
                  }
                },
                function(error) {
                  document.write("This user cannot be updated at this time.");
                });
                this.context.router.push(`/login`);
              })
              // Returns Error
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                //
                // if (error) {
                //     console.log(errorCode);
                // }
                console.log(errorCode, errorMessage);
              });
        }
    }
    render() {
        const RegisterMessage = "Enter Your Name to Begin";
        return (
            <div>
                <RegisterForm
                  userSubmit={this.handleSubmit}
                  username={(input) => { this.username = input }}
                  email={(input) => { this.email = input }}
                  password={(input) => { this.password = input }} />
            </div>
        )
    }
}

Register.contextTypes = {
    router: React.PropTypes.object
}

export default Register;
