'use strict';

const express = require('express');
const router = express.Router();
const conn = require('./db');

router.get('/posts', (req, res) => {

  conn.query('SELECT post_id, title, url, timestamp, score FROM posts;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json({ rows });
  });
});

module.exports = router;
