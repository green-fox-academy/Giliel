'use strict';

// - Create a two dimensional list dynamically with the following content.
//   Note that a two dimensional list is often called matrix if every
//   internal list has the same length.
//   Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
//   Its length should depend on a variable
//
// - Print this two dimensional list to the output

let matrix: number[][] = [];
let size: number = 4;

for (let i: number = 0; i < size; i++) {
  matrix[i] = [];
  for (let j: number = 0; j < size; j++) {
    if (i === j) {
      matrix[i][j] = 1;
    } else {
      matrix[i][j] = 0;
    }
  }
}

matrix.forEach(function (row: number[]): void {
  console.log(row.toString().replace(/,/g, ' '));
});
