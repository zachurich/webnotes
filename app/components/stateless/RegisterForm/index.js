/*
This component is the UI for the 'Register' container component.
Data poassed in though user input is sent up to the container
where the approiate actions occur to handle the user data
*/

import React from 'react';
import Button from '../Button/'
import { Link } from 'react-router';

// import Register from '../../stateless/';

require('../form.scss');

const RegisterForm = (props) => {
    const RegisterMessage = "Sign Up";
    return (
        <div className="entry">
            <form
              className="entry--form"
              onSubmit={props.userSubmit}>
                <h1 class="entry--title" style={{
                  letterSpacing: '0.0625em',
                }}>{RegisterMessage}</h1>
                <input
                  className="input--username"
                  placeholder="Name"
                  type="text"
                  ref={props.username}/>
                <input
                  className="input--email"
                  placeholder="Email"
                  type="text"
                  ref={props.email}/>
                <input
                  className="input--password"
                  placeholder="Password"
                  type="password"
                  ref={props.password}/>
                <Button color="#4b83ec" type="Register"/>
            </form>
            <Link
              className="entry--entry-link"
              to='/login'
              >Already Registered? <span>Login instead.</span>
            </Link>
        </div>
    )
}

export default RegisterForm;
