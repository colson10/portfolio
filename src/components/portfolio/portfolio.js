import React from 'react';
import groupUpPic from '../../assets/groupup-favicon.png';
import triviaWizardPic from '../../assets/wizard-clipart.gif';
import pokemonPic from '../../assets/pokemon3.png';
import Modal from '../modal/modal';
import GUpic1 from '../../assets/groupup-pic4.png';
import pokemonPic2 from '../../assets/pokemon2.png';
import sosPic1 from '../../assets/npm.jpg';
import sosPic2 from '../../assets/twilio.png';

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
            <img src={GUpic1} />
            <p>GroupUp is a virtual meeting place that allows users to create and collaborate with events. Users can make announcements, lists, text posts, or upload images to the event group. GroupUp utilizes basic authentication for login and bearer authorization for access control, as well as google oauth login.</p>
            <h5>JavaScript | Node | React | Redux | Express | MongoDB | Mongoose | AWS S3 | webpack | Travis CI | Jest</h5>
            <h4>Visit it live at <a href='http://groupup.site'>groupup.site</a>, and checkout the <a href='https://github.com/Group-Up'>github</a></h4>
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
            <img src={sosPic1} />
            <p>This is a full backend </p>
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
            <img src={triviaWizardPic} />
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
            <img src={pokemonPic} />
          </Modal>
        </section>
      </div>
    );
  }
}

export default Portfolio;
