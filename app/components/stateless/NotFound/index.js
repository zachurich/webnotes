import React from 'react';
import { Link } from 'react-router';

require('./style.scss');

class NotFound extends React.Component {
  render() {
    // Props are defined here
    const LoginUser = this.props.params.LoginName;
    // Render all our components here
    return (
      <div className="notfound">
        <div className="notfound--card">
          <p className="notfound--text">You need to create an account or login to access Webnotes.</p>
          <Link
            to='/login'>
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
