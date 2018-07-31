import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as routes from '../../routes';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <Link to={routes.LANDING}><p>Home</p></Link>
          <Link to={routes.LANDING}><p>About</p></Link>
          <Link to={routes.LANDING}><p>Contact</p></Link>
        </nav>
      </header>
    );
  }
}

export default Header;
