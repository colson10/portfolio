import React from 'react';

import './about.scss';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <section id='about'>
          <h2>About Me</h2>
          <p className='divider'>______</p>
          <div id='about-block'>
            <div id='img-div'>
              <img src='https://avatars1.githubusercontent.com/u/33847838?s=460&v=4'/>
            </div>
            <p>Hello! I am a full stack software developer with a focus on JavaScript and the MERN stack.</p> {/* eslint-disable-line */}
            <p>After attaining my degree in Biology from the University of Washington, I spent several of years as a <a href='http://pokerdb.thehendonmob.com/player.php?a=r&n=39856' target='_blank' >professional poker player</a> traveling the world playing tournaments and developing my strategic problem solving and decision-making skills. I then started a business in Seattle <a href='https://www.seattlefutsal.com' target='_blank'>organizing the sport of futsal</a> (a form of indoor soccer, played 5v5 on a wall-less, hard court surface) where I had the opportunity to embrace my entrepreneurial spirit and develop leadership and program management skills, as well as grow our organization to have over 1000 kids playing in our programs per year.</p>{/* eslint-disable-line */}            
            <p>I am motivated by how my work can impact my community and the world. I made the move into software development full time because I feel that is where I can have the greatest positive impact, as well as have the opportunity to tackle complex and challenging problems.</p>{/* eslint-disable-line */}
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
