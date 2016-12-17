import React from 'react';

require('./style.scss');

class Button extends React.Component {
  render() {

    const text = this.props.type;
    const color = this.props.color;

    return (
      <button
        onClick={ this.props.close }
        style={{
        background: color,
        height: '40px',
        lineHeight: '40px',
        }}
        type="submit">
        {text}
      </button>
    )
  }
}

export default Button;
