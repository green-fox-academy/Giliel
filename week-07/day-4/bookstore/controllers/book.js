'use strict';

const express = require('express');
const router = express.Router();
const conn = require('./db');

router.get('/book', (req, res) => {
  let category = '%';
  let publisher = '%';
  let pgt = 0;
  let plt = 1000000;

  if (req.query.category) {
    category = req.query.category;
  }

  if (req.query.publisher) {
    publisher = req.query.publisher;
  }

  if (req.query.pgt) {
    pgt = req.query.pgt;
  }

  if (req.query.plt) {
    plt = req.query.plt;
  }

  conn.query(` SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price
    FROM book_mast
    INNER JOIN category ON book_mast.cate_id=category.cate_id
    INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id
    INNER JOIN author ON book_mast.aut_id=author.aut_id
    WHERE category.cate_descrip LIKE (?)
    AND publisher.pub_name LIKE (?)
    AND book_mast.book_price > (?)
    AND book_mast.book_price < (?)
    ORDER BY author.aut_name;`, [category, publisher, pgt, plt],
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json({ error: 'database error' });
        return;
      }
      res.json(rows);
    });
});

module.exports = router;
