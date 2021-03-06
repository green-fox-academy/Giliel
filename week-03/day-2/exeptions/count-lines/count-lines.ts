'use strict';
import * as fs from 'fs';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function lineCounter(fileName: string): number {
  try {
    return (fs.readFileSync(fileName, 'utf-8').split('\n').length);
  }
  catch (e) {
    return 0;
  }
}

console.log(lineCounter('my-file.txt'));