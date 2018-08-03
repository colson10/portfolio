'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app';


const div = document.createElement('div');
document.body.appendChild(div);
render(<App/>, div);
