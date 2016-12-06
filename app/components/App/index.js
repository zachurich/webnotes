import React from 'react';
import ReactDOM from 'react-dom';
import base from '../../config/base';
import {Link} from 'react-router';

import Header from '../presentationals/Header/';
import ListContainer from '../containers/ListContainer/';
import NotFound from '../presentationals/NotFound/';

require('./style.scss');

class App extends React.Component {
    componentDidMount() {
      const welcome = document.querySelector('.welcome');

      setTimeout(() => {
        welcome.style.display = 'none';
      }, 3000)

      // check for user signed-in status
      base
      .auth()
      .onAuthStateChanged( (user) => {
          if (user) {
              console.log(`${user.displayName} is signed in!`);
          } else {
              console.log("A user is NOT signed in!");
          }
      });
    }
    handleLogOut() {
      base
        .auth()
          .signOut()
            .then(() => {
                // Sign-out successful.
                this.context.router.push('/login');
            }, function(error) {
                console.log(error);
            });
    }
    render() {
      function displayWelcome(welcome) {
        return (
          <div
            className="welcome remove">
            <h1
              className="welcome--text">
              { welcome }
            </h1>
          </div>
        )
      }
        // store the current user in a var
        const user = base.auth().currentUser;
        // if we are not signed in, hit the 404
        if (user == null ) {
          this.context.router.push('/404');
        }

        const username = user.displayName;
        const welcomeText = `Welcome back, ${ username }.`;
        // const username = this.props.params.username;
        // Render all our components here
        return (
            <div className="app-contents">
                { displayWelcome(welcomeText) }
                <Header title={username} logout={this.handleLogOut.bind(this)}/>
                <ListContainer url={username}/>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object
}

export default App;
