'use strict';

const express = require('express');
const router = express.Router();
const conn = require('./db');

router.get('/booktitle', (req, res) =>{
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'database error'});
      return;
    }
    res.json(rows);
  });
});

module.exports = router;
