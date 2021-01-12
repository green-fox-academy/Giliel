'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
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

app.get('/appenda/:appendable', (req, res) => {
  let appended = req.params.appendable + 'a';
  res.json({ appended: `${appended}` });
});

app.get('/appenda', (req, res) => {
  res.sendStatus(404);
});

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let until = req.body.until;

  if (until === undefined) {
    res.json({ error: 'Please provide a number!' });
  } else {
    let result = 0;

    if (action === 'sum') {
      for (let i = 0; i <= until; i++) {
        result += i;
      }
    }
    if (action === 'factor') {
      result = until;
      for (let i = until - 1; i > 0; i--) {
        result *= i;
      }
    }
    res.json({ result: result });
  }
});

app.listen(3000);
