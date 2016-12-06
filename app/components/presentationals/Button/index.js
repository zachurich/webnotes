import React from 'react';

require('./style.scss');

class Button extends React.Component {
  render() {

    const text = this.props.type;
    
    return (
      <button type="submit">
        {text}
      </button>
    )
  }
}

export default Button;
