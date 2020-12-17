'use strict';

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)
//  Example
//console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

function unique(arr: number[]): number[] {
  let unique: number[] = [];
  for (let i: number = 0; i < arr.length - 1; i++) {
    if (!unique.find(value => value === arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
