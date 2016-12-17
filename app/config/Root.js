// This is the main component to load all components

// Lets start by importing all the stuff we need for React to work
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// Import all our components to be accessible to Router
import Register from '../components/statefull/Register/';
import Entry from '../components/statefull/Login/';
import App from '../components/App/';
import NotFound from '../components/stateless/NotFound/';

require('./style.scss');
// require('./reset.scss');

const Root = () => {
  return (
    <Router history={hashHistory}>
      <div>
        <Route path="/" component={Register} />
        <Route path="/login" component={Entry} />
        <Route path="/notes/:username" component={App} />
        <Route path="/404" component={NotFound}/>
      </div>
    </Router>
  )
}

// Render the whole thing!
render(<Root/>, document.querySelector('.app'));
