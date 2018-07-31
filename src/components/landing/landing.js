import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-page'>
        <h2>Carl Olson  |  Software Engineer</h2>
      </div>
    );
  }
}

Landing.propTypes = {
};

export default Landing;
