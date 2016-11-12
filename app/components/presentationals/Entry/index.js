import React from 'react';
import Button from '../Button/'

// import Entry from '../../presentationals/';

require('./style.css');

function EntryForm(props) {
    const entryMessage = "Enter Your Name to Begin";
    return (
        <div className="entry-container">
            <h1>{entryMessage}</h1>
            <form
              className="entry-form"
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

export default EntryForm;
