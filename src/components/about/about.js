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
            <p>Hello! I am a full stack software developer with a focus on JavaScript, React, Redux, and Node.</p> {/* eslint-disable-line */}
            <p>I love the constant state of learning that is involved with computer progamming, but I am motivated by how my work can impact my community and the world. I feel software development is where I can have the greatest positive impact on the world around me and tackle complex and challenging problems.</p>{/* eslint-disable-line */}
            <p>I attained a Bachelor of Science in Biology from the University of Washington. I then started a business in Seattle <a href='https://www.seattlefutsal.com' target='_blank'>organizing the sport of futsal</a> where I managed the website content on platforms including WordPress and LeagueApps using HTML and CSS. I loved this opportunity to embrace my entrepreneurial spirit and develop leadership and program management skills. It was also very rewarding to grow our organization to over 1000 kids playing in our programs each year, but the experience in web development is what sparked my interest to learn more and pursue full stack software development.</p>{/* eslint-disable-line */}            
            
          </div>
        </section>
      </div>
    );
  }
}

export default AboutMe;
