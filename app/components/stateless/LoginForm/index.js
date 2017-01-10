/*
This component is the UI for the 'Login' container component.
Data poassed in though user input is sent up to the container
where the approiate actions occur to handle the user data
*/

import React from 'react';
import Button from '../Button/'

import { handleValidation } from '../../helpers';

// import Login from '../../stateless/';

import '../form.scss';

const LoginForm = (props) => {
    return (
        <div className="entry">
            <form
              className="entry--form"
              onSubmit={props.userSubmit}>
              <h1 className="entry--title">Login</h1>
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
                <Button
                  color="#4b83ec"
                  type={ handleValidation('Login', props.errorMessage, props.validation) }/>
            </form>
        </div>
    )
}

export default LoginForm;
