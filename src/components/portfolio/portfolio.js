import React from 'react';
import groupUpPic from '../../assets/groupup-favicon.png';
import triviaWizardPic from '../../assets/wizard-clipart.gif';
import pokemonPic from '../../assets/pokemon3.png';
import Modal from '../modal/modal';
import GUpic1 from '../../assets/groupup-pic4.png';
import triviaWizardPic1 from '../../assets/trivia-wizard-pic.png';
import sosPic1 from '../../assets/npm.jpg';

import './portfolio.scss';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupUp: false,
      sossms: false,
      triviaWizard: false,
      pokemonFightClub: false,
    };
  }

  render() {
    return (
      <div>
        <section id='portfolio'>
          <h2>Portfolio</h2>
          <p className='divider'>______</p>
          <div className='groupup card' onClick={() => this.setState({ groupUp: true })}>
            <h4>GroupUp</h4>
            <img className='groupup-pic' src={groupUpPic} />
            <p>React | Redux | MongoDB</p>
            <p>_______________________</p>
          </div>
          <Modal
            show={this.state.groupUp}
            handleClose={() => this.setState({ groupUp: false })}>
            <h2>GroupUp</h2>
            <div>
            <img src={GUpic1} />
            <p className='description'>GroupUp is a virtual meeting place that allows users to create and collaborate with events. Users can post announcements, lists, text, or upload images to the event group. GroupUp utilizes basic authentication for login and bearer authorization for access control, as well as google oauth login.</p>
            <h5>JavaScript | Node | React | Redux | Express | MongoDB | Mongoose | AWS S3 | webpack | Travis CI | Jest</h5>
            </div>
            <div className='project-links'>
            <h4><a href='http://groupup.site' target='_blank'>groupup.site</a></h4>
            <h4><a href='https://github.com/Group-Up' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='sossms card' onClick={() => this.setState({ sossms: true })}>
            <h4>SOS-SMS</h4>
            <img className='sossms-pic' src='https://howardzuo.gallerycdn.vsassets.io/extensions/howardzuo/vscode-npm-dependency/1.2.0/1519619746611/Microsoft.VisualStudio.Services.Icons.Default' />
            <p>Published package on NPM</p>
            <p>_______________________</p>
          </div>
          <Modal
            show={this.state.sossms}
            handleClose={() => this.setState({ sossms: false })}>
            <h2>SOS-SMS</h2>
            <div>
            <img src={sosPic1} />
            <p className='description'>SOS-SMS is a published npm package designed to make it easy for freelance developers managing many projects to receive text messages when errors occur in deployed applications. It was built in conjunction with a server application and database to provide data persistence. The server and database are open source and simple to setup with Heroku deployment, after which using the npm package gives the developer the easy integration of writing a simple line of code to receive a customizable text for a specific error.</p>
            <h5>NPM | Twilio API | JavaScript | Node | Express | MongoDB | Mongoose | Travis CI | Jest</h5>
            </div>
            <div className='project-links'>
            <h4><a href='https://www.npmjs.com/package/sos-sms' target='_blank'>npmjs.com/package/sos-sms</a></h4>
            <h4><a href='https://github.com/401-Team-Awesome/sos-sms-server' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='trivia-wizard card' onClick={() => this.setState({ triviaWizard: true })}>
            <h4>Trivia Wizard</h4>
            <img className='trivia-pic' src={triviaWizardPic} />
            <p>Vanilla JavaScript</p>
            <p>_______________________</p>
          </div>
          <Modal
            show={this.state.triviaWizard}
            handleClose={() => this.setState({ triviaWizard: false })}>
            <h2>Trivia Wizard</h2>
            <div>
            <img src={triviaWizardPic1} />
            <p className='description'>Trivia Wizard increases in difficulty as you advance with getting questions correct. Built with vanilla JavaScript as an early project in my Code Fellows immersive program, I am proud of the intuitive UI achieved with simple HTML/CSS design.</p>
            </div>
            <div className='project-links'>
            <h4><a href='https://trivia-game.github.io/trivia-wizard' target='_blank'>https://trivia-game.github.io/trivia-wizard</a></h4>
            <h4><a href='https://github.com/trivia-game/trivia-wizard' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
          <div className='pokemon card' onClick={() => this.setState({ pokemonFightClub: true })}>
            <h4>Pokemon Fight Club</h4>
            <img className='pokemon-pic' src={pokemonPic} />
            <p>jQuery | SQL | Express</p>
            <p>_______________________</p>
          </div>
          <Modal
            show={this.state.pokemonFightClub}
            handleClose={() => this.setState({ pokemonFightClub: false })}>
            <h2>Pokemon Fight Club</h2>
            <div>
            <img src={pokemonPic} />
            <p className='description'>Pokemon Fight Club is a jQuery based application accessing the external pokemon API. Users can 'catch' pokemon, then choose one of their characters to 'fight' against another pokemon. Fighting involves comparing stats with a random element of chance incorporated. Users, the characters they catch, and their stats, are saved and accessed via postgresql. This project was a fun test in using jQuery to handle numerous API responses and render complex views.</p>            
            <h5>JavaScript | Node | Express | SQL | HandleBars | Page.js</h5>
            </div>
            <div className='project-links'>
            <h4><a href='http://pokemonfight.club' target='_blank'>pokemonfight.club</a></h4>
            <h4><a href='https://github.com/301projectCastr/301projectcastr.github.io' target='_blank'>GitHub</a></h4>
            </div>
          </Modal>
        </section>
      </div>
    );
  }
}

export default Portfolio;
