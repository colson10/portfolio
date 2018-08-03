import React from 'react';
import groupUpPic from '../../assets/groupup-favicon.png';
import triviaWizardPic from '../../assets/wizard-clipart.gif';
import pokemonPic from '../../assets/pokemon3.png';

import './portfolio.scss';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Portfolio;