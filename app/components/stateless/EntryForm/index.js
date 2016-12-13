/*
This component is the UI for the 'Login' container component.
Data poassed in though user input is sent up to the container
where the approiate actions occur to handle the user data
*/

import React from 'react';
import Button from '../Button/'

// import Login from '../../stateless/';

require('./style.scss');

function LoginForm(props) {
    const LoginMessage = "Login";
    return (
        <div className="Login">
            <form
              className="Login--form"
              onSubmit={props.userSubmit}>
              <h1 className="Login--title" style={{
                letterSpacing: '0.0625em',
              }}>{LoginMessage}</h1>
                <input
                  className="input--username"
                  placeholder="Email"
                  type="text"
                  ref={props.email}/>
                <input
                  className="input--password"
                  placeholder="Password"
                  type="password"
                  ref={props.password}/>
                <Button type="Login"/>
            </form>
        </div>
    )
}

export default LoginForm;
