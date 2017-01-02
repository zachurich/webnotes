// Header Component
import React from 'react';

require('./style.scss');


const Header = (props) => {
    const username = props.title;
    return (
      <header class="header">
        <div className="header--add-note" onClick={ props.triggerEditor }>
          <div className="contain-button">
            <span className="header--add-note--vertical"></span>
            <span className="header--add-note--horizontal"></span>
          </div>
        </div>
        <div className="header--title" style={{
          letterSpacing: '0.0625em',
        }}>{username}</div>
        <div className="header--menu" onClick={ props.logout }>
          <div className="contain-button">
            <span className="header--menu--horizontal"></span>
            <span className="header--menu--horizontal"></span>
            <span className="header--menu--horizontal"></span>
          </div>
        </div>
      </header>
    );
}

export default Header;
