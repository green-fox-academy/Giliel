'use strict';

let lineCount: number = 4;
let starBrick: string = '*';

for (let i: number = 1; i <= lineCount; i++) {
  let space: string = '';
  for (let j: number = (lineCount - i); j > 0; j--) {
    space += ' ';
  }
  console.log(space + starBrick);
  starBrick += '**';
}