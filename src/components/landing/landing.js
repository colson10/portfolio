import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import groupUpPic from '../../assets/groupup-favicon.png';
import triviaWizardPic from '../../assets/wizard-clipart.gif';
import pokemonPic from '../../assets/pokemon3.png';
import Header from '../header/header';

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
            <section id='about'>
              <h2>About Me</h2>
              <p className='divider'>______</p>
              <div id='about-block'>
                <div id='img-div'>
                  <img src='https://avatars1.githubusercontent.com/u/33847838?s=460&v=4'/>
                </div>
                <p>Hello! I am a full stack software developer with a focus on JavaScript and the MERN stack.</p>
                <p>After attaining my degree in Biology from the University of Washington, I spent a number of years as a professional poker player traveling the world playing tournaments and developing my strategic problem solving and decision-making skills. I then started a business in Seattle organizing the sport of futsal (a form of indoor soccer, played 5v5 on a wall-less, hard court surface) where I had the opportunity to embrace my entrepreneurial spirit and develop leadership and program management skills, as well as grow our organization to have over 1000 kids playing in our programs per year.</p>

                <p>I am motivated by how my work can impact my community and the world. I made the move into software development full time because I feel that is where I can have the greatest positive impact.</p>
              </div>
            </section>
            <section id='portfolio'>
              <h2>Portfolio</h2>
              <p className='divider'>______</p>
              <div className='groupup card'>
                <h4>GroupUp</h4>
                <img className='groupup-pic' src={groupUpPic} />
                <p>React | Redux | MongoDB</p>
                <p>_______________________</p>
              </div>
              <div className='sossms card'>
                <h4>SOS-SMS</h4>
                <img className='sossms-pic' src='https://howardzuo.gallerycdn.vsassets.io/extensions/howardzuo/vscode-npm-dependency/1.2.0/1519619746611/Microsoft.VisualStudio.Services.Icons.Default' />
                <p>Published package on NPM</p>
                <p>_______________________</p>
              </div>
              <div className='trivia-wizard card'>
                <h4>Trivia Wizard</h4>
                <img className='trivia-pic' src={triviaWizardPic} />
                <p>Vanilla JavaScript</p>
                <p>_______________________</p>
              </div>
              <div className='pokemon card'>
                <h4>Pokemon Fight Club</h4>
                <img className='pokemon-pic' src={pokemonPic} />
                <p>jQuery | SQL | Express</p>
                <p>_______________________</p>
              </div>
            </section>
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
