import React from 'react';
import ReactDOM from 'react-dom';
import base from '../../config/base';
import { Link } from 'react-router';

import Header from '../statefull/Header/';
import ListContainer from '../statefull/ListContainer/';
import NotFound from '../stateless/NotFound/';

require('./style.scss');

class App extends React.Component {
    constructor() {
      super();

      this.state = {
        username: ''
      }

      this.handleLogOut = this.handleLogOut.bind(this);
      this.handleName = this.handleName.bind(this);
    }
    componentWillMount() {
      // check for user signed-in status
      base
      .auth()
      .onAuthStateChanged( (user) => {
          if (user) {
              console.log(`${user.displayName} is signed in!`);
              this.setState( { username: user.displayName } );
          } else {
              console.log("A user is NOT signed in!");
          }
      });
    }

    handleName(username) {
      console.log(username);
      return username;
    }

    componentDidMount() {
      const welcome = document.querySelector('.welcome');

      setTimeout(() => {
        welcome.style.display = 'none';
      }, 3000)
    }

    handleLogOut() {
      base
        .auth()
          .signOut()
            .then(() => {
                // Sign-out successful.
                this.context.router.push('/');
            }, function(error) {
                console.log(error);
            });
    }

    displayWelcome = (welcome) => {
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
    render() {
      // if we are not signed in, hit the 404
      // if (this.state.user == null ) {
      //   this.context.router.push('/404');
      // }
      const username = this.state.username;
      const welcomeText = `Welcome, ${ this.state.username }.`;
        // Render all our components here
        return (
            <div className="app-contents">
                { this.displayWelcome(welcomeText) }
                <Header title={ username } logout={this.handleLogOut}/>
                <ListContainer url={ username }/>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object
}

export default App;
