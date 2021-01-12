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









app.listen(3000);