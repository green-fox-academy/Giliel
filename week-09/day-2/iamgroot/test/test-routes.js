'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  // TODO: implement it
  request(app)
    .get('/groot?message=message')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      let actualResponse = res.body;
      let expectedResponse = { 'received': 'message', 'translated': 'I am Groot!' };

      t.deepEqual(actualResponse, expectedResponse);
      t.end();
    });
});
