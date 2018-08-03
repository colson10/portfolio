import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Header from '../header/header';
import AboutMe from '../about/about';
import Portfolio from '../portfolio/portfolio';

import './landing.scss';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-page'>
        <Header />
        <div className='main-section'>
            <section id='intro'>
              <h2>Carl Olson</h2>
              <h3>Full Stack Software Developer</h3>
              <h4>Seattle, WA</h4>
            </section>
            <AboutMe />
            <Portfolio />
            <section id='contact'>
              <h2>Contact</h2>
              <p className='divider'>______</p>
              <h4>Email me at colson10@gmail.com</h4>
              <p>Github</p>
              <p>LinkedIn</p>
            </section>
        </div>
        <footer className='footer'>
        <AnchorLink href='#intro'><p>Back to top</p></AnchorLink>
        </footer>
      </div>
    );
  }
}

export default Landing;
