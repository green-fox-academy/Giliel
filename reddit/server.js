'use strict';

const express = require('express');
const postsEndpoint = require('./controllers/posts');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(postsEndpoint);

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/', (res, req) =>{
  res.sendFile('index.html');
});

app.listen(3000);
