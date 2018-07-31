import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';

import './landing.scss';

class Landing extends React.Component {

  render() {
    return (
      <div className='landing-page'>
        <header className='header'>
          <nav>
            <a href='#intro'><p>Home</p></a>
            <a href='#about'><p>About</p></a>
            <a href='#projects'><p>Projects</p></a>
            <a href='#contact'><p>Contact</p></a>
          </nav>
        </header>
        <div className='main-section'>
          {/* <ScrollableAnchor id={'intro'}> */}
            <section id='intro'>
              <h2>Carl Olson</h2>
              <h3>Full Stack Software Developer</h3>
            </section>
          {/* </ScrollableAnchor>
          <ScrollableAnchor id={'about'}> */}
            <section id='about'>
              <h2>About Me</h2>
            </section>
          {/* </ScrollableAnchor>
          <ScrollableAnchor id={'projects'}> */}
            <section id='projects'>
              <h2>Projects</h2>
              <h4>GroupUp</h4>
              <h4>SOS-SMS</h4>
            </section>
          {/* </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}> */}
            <section id='contact'>
              <h2>Contact</h2>
              <h4>Email me at colson10@gmail.com</h4>
              <p>Github</p>
              <p>LinkedIn</p>
            </section>
          {/* </ScrollableAnchor> */}
        </div>
      </div>
    );
  }
}

export default Landing;
