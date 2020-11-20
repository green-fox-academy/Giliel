'use strict';

let number: number = 5;
let sum: number = number;

for (let i:number = 1; i < number; i++) {
  sum += i;
}

let averige: number = sum / number;

console.log('Sum: ' + sum + ', Average: ' + averige);