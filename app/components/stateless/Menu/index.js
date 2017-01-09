import React from 'react';

import './style.scss';

const Menu = (props) => {
  return (
    <ul className="menu">
      <li className="menu--item">{ props.email }</li>
      <li className="menu--item" onClick={ props.logout }>Logout</li>
    </ul>
  )
}

export default Menu;
