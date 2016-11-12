import React from 'react';

import Header from '../presentationals/Header/';
import ListContainer from '../containers/ListContainer/';

require('./style.css');

class App extends React.Component {
    render() {
        // Props are defined here
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

export default App;
