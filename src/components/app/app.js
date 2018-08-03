import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Landing from '../landing/landing';

// import Favicon from 'react-favicon';

import '../../style/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Helmet>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta property="og:title" content="Carl Olson Portfolio" />
            <meta property="og:type" content="website" />
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          </Helmet>
          <Route path='*' component={Landing}/>
        </div>
      </BrowserRouter>
    );
  }
}
