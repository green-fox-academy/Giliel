'use strict';

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(maxNum: number): number {
  let sumOfNum: number = 0;
  for (let i: number = 0; i <= maxNum; i++) {
    sumOfNum += i;
  }
  return sumOfNum;
}

console.log(sum(3));
