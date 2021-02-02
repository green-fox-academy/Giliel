'use strict';

const express = require('express');
const router = express.Router();
const conn = require('./db');

router.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts ORDER BY timestamp DESC;', (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.status(200).json({ rows });
  });
});

router.post('/posts', (req, res) => {
  const title = req.body.title;
  const url = req.body.url;

  conn.query(`INSERT INTO posts (title, url, timestamp) VALUES
  (?, ?, CURRENT_TIMESTAMP());`, [title, url],
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json(err);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE post_id = ${rows.insertId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).json(err);
            return;
          }
          res.status(200).json(rows);
        });
    });
});

router.put('/posts/:id/upvote', (req, res) => {
  const postId = req.params.id;

  conn.query(`UPDATE posts SET score = score + 1 WHERE post_id = ?;`, [postId],
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json(err);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE post_id = ${postId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).json(err);
            return;
          }
          res.status(200).json(rows);
        });
    });
});

router.put('/posts/:id/downvote', (req, res) => {
  const postId = req.params.id;

  conn.query(`UPDATE posts SET score = score - 1 WHERE post_id = ?;`, [postId],
    (err, rows) => {
      if (err) {
        console.log(err.toString());
        res.status(500).json(err);
        return;
      }
      conn.query(`SELECT * FROM posts WHERE post_id = ${postId};`,
        (err, rows) => {
          if (err) {
            console.log(err.toString());
            res.status(500).json(err);
            return;
          }
          res.status(200).json(rows);
        });
    });
});

module.exports = router;
