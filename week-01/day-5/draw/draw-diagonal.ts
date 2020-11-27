'use strict'

let lineCount: number = 6;

for (let i: number = 0, space1: string = ''; i < lineCount; i++) {
  let pen: string = '%';

  if ((i === 0) || (i === (lineCount - 1))) {
    for (let j: number = 0; j < (lineCount - 1); j++) {
      pen += '%';
    }
    console.log(pen);
  } else {
    let space2: string = '';
    for (let j: number = (lineCount - 2 - i); j > 0; j--) {
      space2 += ' ';
    }
    console.log(pen + space1 + pen + space2 + pen);
    space1 += ' ';
  }
}
