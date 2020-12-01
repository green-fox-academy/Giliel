'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divider(num: number): void {
  try {
    if (num === 0) {
      throw 'myExeption';
    } else {
      console.log(10 / num);
    }
  }

  catch (e) {
    console.log('fail');
  }
}

divider(-5);