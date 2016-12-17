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
        username: '',
        editor: false,
        error: true,
      }

      this.handleLogOut = this.handleLogOut.bind(this);
      this.handleName = this.handleName.bind(this);
      this.showEditor = this.showEditor.bind(this);
      this.closeEditor = this.closeEditor.bind(this);
      this.handleButtonText = this.handleButtonText.bind(this);
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
              this.context.router.push(`/404`);
          }
      });
    }

    handleName(username) {
      console.log(username);
      return username;
    }

    componentDidMount() {
      document.addEventListener("touchstart", function() {},false);
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

    showEditor() {
      this.setState({ editor: true });
    }

    handleButtonText(e) {
      if (e.target.value) {
        this.setState({ error: false });
      } else {
        this.setState({ error: true });
      }
    }

    closeEditor() {
      this.setState({ editor: false, error: true })
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
      const username = this.state.username;
      const welcomeText = `Welcome, ${ this.state.username }.`;
        // Render all our components here
        return (
            <div className="app-contents">
                { this.displayWelcome(welcomeText) }
                <Header
                  triggerEditor={this.showEditor}
                  title={ username }
                  logout={this.handleLogOut}/>
                <ListContainer
                  error={this.state.error}
                  updateText={ this.handleButtonText }
                  editor={this.state.editor}
                  close={this.closeEditor}
                  url={ username }/>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object
}

export default App;
