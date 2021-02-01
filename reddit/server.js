'use strict';

const express = require('express');
const postsEndpoint = require('./controllers/posts');

const app = express();

app.use(express.static('public'));
app.use(postsEndpoint);


app.get('/hello', (req, res) => {
  res.send('hello world');
});






app.listen(3000);
