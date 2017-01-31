// Header Component
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Menu from '../Menu/';

import './style.scss';
import '../../transitions.scss';


const Header = (props) => {
    return (
      <header class="header">
        <div className="header--add-note" onClick={ props.triggerEditor }>
          <div className="contain-button">
            <span className="header--add-note--vertical"></span>
            <span className="header--add-note--horizontal"></span>
          </div>
        </div>
        <div className="header--title" style={{
          letterSpacing: '0.0125em',
        }}>{ props.title }</div>
        <div className="header--menu" onClick={ props.triggerMenu }>
          <div className="contain-button">
            <span className="header--menu--horizontal"></span>
            <span className="header--menu--horizontal"></span>
            <span className="header--menu--horizontal"></span>
          </div>
        </div>

        <ReactCSSTransitionGroup
          transitionName="drop-down"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          { props.menu ?
            <Menu
              email={ props.userEmail }
              logout={ props.logout }
            /> : null }
        </ReactCSSTransitionGroup>
      </header>
    );
}

export default Header;
