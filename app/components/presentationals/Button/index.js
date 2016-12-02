import React from 'react';

require('./style.scss');

class Button extends React.Component {
  render() {

    // Grab current route
    const path = window.location.hash;
    let text = '';

    // Change text depending on route keywords
    if(path.indexOf("login") > -1)
      text = 'Login';
    else
    if(path.indexOf("notes") > -1)
      text = 'Add Note';
    else
      text = 'Register'

    return (
      <button type="submit">
        {text}
      </button>
    )
  }
}

export default Button;
