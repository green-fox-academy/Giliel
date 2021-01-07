'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = req.query.name;
  res.render('home', { name: name });
});

app.listen(3000);
