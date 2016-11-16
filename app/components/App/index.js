import React from 'react';
import base from '../../config/base';
import { Link } from 'react-router';

import Header from '../presentationals/Header/';
import NotFound from '../presentationals/NotFound/'
import ListContainer from '../containers/ListContainer/';

require('./style.css');

class App extends React.Component {
    componentDidMount() {
      base.auth().onAuthStateChanged( (user) => {
        if (user) {
          console.log("A user is signed in!");
        } else {
          console.log("A user is NOT signed in!");
        }
      });
      const user = base.auth().currentUser;
      // Check for existing user data and grab the username to use for
      // user's unique notes route
      if (user != null) {
        user.providerData.forEach( profile => {
          const username = profile.displayName;
          console.log(username);
        });
      }
    }
    componentWillUnmount() {
      base.auth().signOut().then( () => {
        // Sign-out successful.
        console.log(`${this.username} is now logged out!`);
      }, function(error) {
        console.log(error);
      });
    }
    render() {
        const username = this.props.params.username;
        // Render all our components here
        return (
            <div className="app-contents">
              <Header title={username}/>
              <ListContainer url={username}/>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object
}

export default App;
