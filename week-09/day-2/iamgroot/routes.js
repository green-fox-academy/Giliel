const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let message = req.query.message;

  if (message === undefined) {
    res.status(400).json({ 'error': 'I am Groot!' });
  } else {
    res.json({ 'received': message, 'translated': 'I am Groot!' });
  }
});

module.exports = app;
