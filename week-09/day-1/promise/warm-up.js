'use strict';

require('es6-promise');

let promise = new Promise(function (fulfill, reject) {
  setTimeout(() => fulfill('TIMED OUT!'), 300);
});

promise.then((response) => {
  console.log(response);
});
