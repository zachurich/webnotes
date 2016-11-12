/*
This component houses the 'EntryForm' component and is responsible for
taking in user data, and creating appropriate route params
*/

/* TODO: Create a Register Component and a login component */

import React from 'react';
import base from '../../../config/base';
import EntryForm from '../../presentationals/EntryForm/'

require('./style.css');

class Entry extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // get the data from the input
        const username = this.username.value;
        const email = this.email.value;
        const password = this.password.value;
        /*
          Using an arrow function here allows 'this' to remain properly bound.
          The syntax used before was 'cont authHandler = function authHandler(...)'
          which resulted in 'this' being rebound
        */
        const authHandler = (error, email) => {
          if(username.length < 0 && email.length < 0 && password.length < 0 || error) {
            console.log(error);
          } else {
            console.log('Logged In!')
            this.context.router.push(`/notes/${username}`);
          }
        }

        // Simple email/password authentication
        base.authWithPassword({
            email: email,
            password: password,
        }, authHandler);

    }
    render() {
        const entryMessage = "Enter Your Name to Begin";
        return (
          <EntryForm
            userSubmit={this.handleSubmit}
            username={(input) => {
              this.username = input
            }}
            email={(input) => {
              this.email = input
            }}
            password={(input) => {
              this.password = input
            }}
          />
        )
    }
}

Entry.contextTypes = {
    router: React.PropTypes.object
}

export default Entry;
