import React from 'react';
import base from '../../config/base';
import {Link} from 'react-router';

import Header from '../presentationals/Header/';
import NotFound from '../presentationals/NotFound/'
import ListContainer from '../containers/ListContainer/';

require('./style.scss');

class App extends React.Component {
    componentDidMount() {
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
    componentWillUnmount() {
        base
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            console.log(`Now logged out!`);
        }, function(error) {
            console.log(error);
        });
    }
    render() {
        // store the current user in a var
        const user = base.auth().currentUser;
        // if we are not signed in, hit the 404
        if (user == null ) {
          this.context.router.push('/404');
        }

        const username = user.displayName;
        // const username = this.props.params.username;
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
