// This is the main component to load all components

// Lets start by importing all the stuff we need for React to work
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// Import all our components to be accessible to Router
import Register from '../components/containers/Register';
import Entry from '../components/containers/Entry/';
import App from '../components/App/';
import NotFound from '../components/presentationals/NotFound/';

require('./style.css');
require('./reset.css');

const Root = () => {
  return (
    <Router history={hashHistory}>
      <div>
        <Route path="/" component={Register} />
        <Route path="/login" component={Entry} />
        <Route path="/notes/:username" component={App} />
        <Route component={NotFound}/>
      </div>
    </Router>
  )
}

// Render the whole thing!
render(<Root/>, document.querySelector('.app'));
