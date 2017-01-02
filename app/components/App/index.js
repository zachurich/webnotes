import React from 'react';
import ReactDOM from 'react-dom';
import base from '../../config/base';
import { Link } from 'react-router';

import Header from '../stateless/Header/';
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
      // firebase returns an unsubscribe function here
      // when called, so we are saving a reference
      // that is called on componentWillUnmount
      this.unsubscribe = base.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ username: user.displayName });
        }
      });
    }
    componentDidMount() {
      document.addEventListener("touchstart", function() {},false);
      const welcome = document.querySelector('.welcome');

      setTimeout(() => {
        welcome.style.display = 'none';
      }, 3000);

      /*
      We're gonna check if the logged-in
      user's url hash us equal to their
      username
      */
      const str = window.location.hash;
      const strFormat = str.lastIndexOf('/');
      const urlHash = str.substring(strFormat + 1);

      /*
      if hash isn't equal, kick 'em to the 404.
      this prevents the user from accessing/updating
      someone else's notes
      */
      setTimeout(() => {
        if(urlHash !== this.state.username) {
          this.context.router.push('/404');
        }
      }, 300);
    }
    handleName(username) {
      return username;
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
    componentWillUnmount() {
      this.unsubscribe();
      document.removeEventListener("touchstart", function() {},false);
    }
}

App.contextTypes = {
    router: React.PropTypes.object
}

export default App;
