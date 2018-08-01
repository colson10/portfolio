import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './landing.scss';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-page'>
        <header className='header'>
          <nav>
            <AnchorLink href='#intro'><p>Home</p></AnchorLink>
            <AnchorLink href='#about'><p>About</p></AnchorLink>
            <AnchorLink href='#projects'><p>Projects</p></AnchorLink>
            <AnchorLink href='#contact'><p>Contact</p></AnchorLink>
          </nav>
        </header>
        <div className='main-section'>
            <section id='intro'>
              <h2>Carl Olson</h2>
              <h3>Full Stack Software Developer</h3>
            </section>
            <section id='about'>
              <h2>About Me</h2>
            </section>
            <section id='projects'>
              <h2>Projects</h2>
              <h4>GroupUp</h4>
              <h4>SOS-SMS</h4>
            </section>
            <section id='contact'>
              <h2>Contact</h2>
              <h4>Email me at colson10@gmail.com</h4>
              <p>Github</p>
              <p>LinkedIn</p>
            </section>
        </div>
        <footer className='footer'>
        <AnchorLink href='#intro'><p>Home</p></AnchorLink>
        </footer>
      </div>
    );
  }
}

export default Landing;
