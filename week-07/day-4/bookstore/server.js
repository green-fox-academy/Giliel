'use strict';

const express = require('express');
const path = require('path');
const booktitleEndpoint = require('./controllers/booktitle');

const app = express();

app.use(express.json());
app.use(express.static('assets'));
app.use(booktitleEndpoint);

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
