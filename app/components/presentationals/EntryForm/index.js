/*
This component is the UI for the 'Entry' container component.
Data poassed in though user input is sent up to the container
where the approiate actions occur to handle the user data
*/

import React from 'react';
import Button from '../Button/'

// import Entry from '../../presentationals/';

require('./style.scss');

function EntryForm(props) {
    const entryMessage = "Login";
    return (
        <div className="entry">
            <form
              className="entry--form"
              onSubmit={props.userSubmit}>
              <h1 className="entry--title">{entryMessage}</h1>
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
                <Button/>
            </form>
        </div>
    )
}

export default EntryForm;
