'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let baseNum = req.query.input;

  if (baseNum === undefined) {
    res.json({ error: 'Please provide an input!' });
  } else {
    let doubledNum = baseNum * 2;
    res.json({ received: Number(baseNum), result: doubledNum });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  if (name === undefined && title === undefined) {
    res.status(400).json({ error: 'Please provide a name and a title!' });
  } else if (name === undefined) {
    res.status(400).json({ error: 'Please provide a name!' });
  } else if (title === undefined) {
    res.status(400).json({ error: 'Please provide a title!' });
  } else {
    res.json({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
  }

});









app.listen(3000);