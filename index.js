'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('./build'));

app.listen(process.env.PORT, () => {
  console.log(__dirname, 'this is the dirname');
  console.log('__SERVER UP__', process.env.PORT);
});

app.get('*', (request, response) => {
  response.sendFile('./build/index.html');
});
