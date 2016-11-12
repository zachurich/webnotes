/*
This component houses the 'RegisterForm' component and is responsible for
taking in user data, and creating appropriate route params
*/

/* TODO: Create a Register Component and a login component */

import React from 'react';
import {Link} from 'react-router';
import base from '../../../config/base';
import RegisterForm from '../../presentationals/RegisterForm/'

require('./style.css');

class Register extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        const username = this.username.value;
        const email = this.email.value;
        const password = this.password.value;

        base.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log("User could not be registered. " + error);
        });

        var user = base.auth().currentUser;

        user.updateProfile({
            displayName: username,
          }).then(function() {
            if (user != null) {
              user.providerData.forEach(function (profile) {
                console.log("  Name: "+ profile.displayName);
              });
            }
          }, function(error) {
            // An error happened.
        });


    }
    render() {
        const RegisterMessage = "Enter Your Name to Begin";
        return (
            <div>
                <RegisterForm userSubmit={this.handleSubmit} username={(input) => {
                    this.username = input
                }} email={(input) => {
                    this.email = input
                }} password={(input) => {
                    this.password = input
                }}/>
                <Link to='/login'>Already Registered? Login instead.</Link>
            </div>
        )
    }
}

Register.contextTypes = {
    router: React.PropTypes.object
}

export default Register;
