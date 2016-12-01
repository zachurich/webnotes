import React from 'react';

// require('./style.scss');

class NotFound extends React.Component {
  render() {
    // Props are defined here
    const entryUser = this.props.params.entryName;
    // Render all our components here
    return (
      <div>
        <p>Nothing Here...</p>
      </div>
    );
  }
}

export default NotFound;
