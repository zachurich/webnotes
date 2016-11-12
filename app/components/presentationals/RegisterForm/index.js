/*
This component is the UI for the 'Register' container component.
Data poassed in though user input is sent up to the container
where the approiate actions occur to handle the user data
*/

import React from 'react';
import Button from '../Button/'

// import Register from '../../presentationals/';

require('./style.css');

function RegisterForm(props) {
    const RegisterMessage = "Register";
    return (
        <div className="Register-container">
            <h1>{RegisterMessage}</h1>
            <form
              className="Register-form"
              onSubmit={props.userSubmit}>
                <input
                  className="username-input"
                  placeholder="Name"
                  type="text"
                  ref={props.username}/>
                <input
                  className="username-input"
                  placeholder="Email"
                  type="text"
                  ref={props.email}/>
                <input
                  className="password-input"
                  placeholder="Password"
                  type="text"
                  ref={props.password}/>
                <Button/>
            </form>
        </div>
    )
}

export default RegisterForm;
