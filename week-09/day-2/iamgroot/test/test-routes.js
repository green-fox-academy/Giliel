'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with parameter', (t) => {
  // TODO: implement it
  request(app)
    .get('/groot?message=message')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      let actualResponse = res.body;
      let expectedResponse = { 'received': 'message', 'translated': 'I am Groot!' };

      t.deepEqual(actualResponse, expectedResponse);
      t.end();
    });
});

test('groot endpoint without parameter', (t) => {
  // TODO: implement it
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
      let actualResponse = res.body;
      let expectedResponse = { 'error': 'I am Groot!' };

      t.deepEqual(actualResponse, expectedResponse);
      t.end();
    });
});
