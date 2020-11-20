'use strict'

let lineCount: number = 7;

for (let i: number = 0; i < lineCount; i++) {
  let pen: string = '%';

  if ((i == 0) || (i == (lineCount - 1))) {
    for (let j: number = 0; j < (lineCount - 1); j++) {
      pen += '%';
    }
    console.log(pen);
  } else {
    let space: string = '';
    for (let k: number = 0; k < (lineCount - 2); k++) {
      space += ' ';
    }
    console.log(pen + space + pen);
  }
}