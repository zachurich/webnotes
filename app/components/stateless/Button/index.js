import React from 'react';

import './style.scss';

class Button extends React.Component {
  render() {
    const text = this.props.type;
    const color = this.props.color;
    let style = {
      height: '40px'
    }
    return (
      <button
        onClick={ this.props.close }
        style={style}
        type="submit">
        { text }
      </button>
    )
  }
}

export default Button;
