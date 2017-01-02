import React from 'react';
import { Link } from 'react-router';

require('./style.scss');

const NotFound = () => {
    // Render all our components here
    return (
      <div className="notfound">
        <div className="notfound--card">
          <p className="notfound--text">You need to login to access Webnotes.</p>
          <Link
            to='/login'>
            Login
          </Link>
        </div>
      </div>
    );
}

export default NotFound;
