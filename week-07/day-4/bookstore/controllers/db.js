'use strict';

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

conn.connect((err) => {
  if (err) throw err;
  console.log(`Connected!`);
});

module.exports = conn;
