'use strict';

const express = require('express');
const booktitleEndpoint = require('./controllers/booktitle');
const bookEndpoint = require('./controllers/book');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(booktitleEndpoint);
app.use(bookEndpoint);

app.get('/', (req, res) =>{
  res.sendFile('index.html');
});

app.listen(3000);
