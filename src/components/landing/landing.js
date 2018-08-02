import React from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import groupUpPic from '../../assets/groupup-favicon.png';
import sossmsPic from '../../assets/sos-sms.png'

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
              <h4>Seattle, WA</h4>
            </section>
            <section id='about'>
              <h2>About Me</h2>
              <div>
                <img src='https://avatars1.githubusercontent.com/u/33847838?s=460&v=4'/>
              </div>
              <div>
                <p>Hello! I am a full stack software developer with a focus on JavaScript and the MERN stack.</p>
                <p>After attaining my degree in Biology from the University of Washington, I spent a number of years as a professional poker player traveling the world playing tournaments and developing my strategic problem solving and decision-making skills. I then started a business in Seattle organizing the sport of futsal (a form of indoor soccer, played 5v5 on a wall-less, hard court surface) where I had the opportunity to embrace my entrepreneurial spirit and develop leadership and program management skills, as well as grow our organization to have over 1000 kids playing in our programs per year.</p>

                <p>I am motivated by how my work can impact my community and the world. I made the move into software development full time because I feel that is where I can have the greatest positive impact.</p>
              </div>
            </section>
            <section id='projects'>
              <h2>Projects</h2>
              <div className='groupup'>
                <h4>GroupUp</h4>
                <p>Click on picture to learn more...</p>
                <img className='groupup-pic' src={groupUpPic} />
                <p><a href='http://groupup.site'>Visit GroupUp</a></p>
              </div>
              <div className='sossms'>
                <h4>SOS-SMS</h4>
                <p>Click on picture to learn more...</p>
                <img className='sossms-pic' src='https://howardzuo.gallerycdn.vsassets.io/extensions/howardzuo/vscode-npm-dependency/1.2.0/1519619746611/Microsoft.VisualStudio.Services.Icons.Default' />
                <p><a href='https://www.npmjs.com/package/sos-sms'>SOS-SMS published on npm</a></p>
              </div>
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
