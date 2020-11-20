'use strict';

let lineCount: number = 7;
let lineCountHalf: number = Math.round(lineCount / 2);
let starBrick: string = '*';
let space: string = '';

if ((lineCount % 2) == 0) {
  console.log('I can\'t draw a diamond with this number. Please give me an odd number. ');
} else {
  for (let i: number = 1; i <= lineCountHalf; i++) {
    space = '';
    for (let j: number = (lineCountHalf - i); j > 0; j--) {
      space += ' ';
    }
    console.log(space + starBrick);
    starBrick += '**';
  }
  for (let i: number = 1; i < lineCountHalf; i++) {
    space += ' ';
    starBrick = '*';
    for (let j: number = (lineCountHalf - i); j > 1; j--) {
      starBrick += '**';
    }
    console.log(space + starBrick);
  }
}