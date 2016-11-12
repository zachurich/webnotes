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

        // Set up user auth
        // TODO: Create a Register Component and a login component
        const authHandler = function(error, email) {
            if (error)
              console.log(error);
        }

        // Simple email/password authentication
        base.authWithPassword({
            email: email,
            password: password,
        }, authHandler);
        // check for form values
        // TODO: Obviously make this check more complex
        if(username.length > 0) {
          this.context.router.push(`/notes/${username}`);
        } else {
          console.log("ERROR");
        }
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
              this.username = input
            }}
          />
        )
    }
}

Entry.contextTypes = {
    router: React.PropTypes.object
}

export default Entry;
