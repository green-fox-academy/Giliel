'use strict';

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test

let numbers: number[] = [1, 2, 3, 8, 5, 6];

let newNumbers: number[] = numbers.map(function(value: number): number {
  if (value === 8) {
    return 4;
  }
  return value;
});

console.log(newNumbers[3]);