'use strict';

function starAdder(text: string): string {
  if (text.length === 1) {
    return text;
  }
  return text.substr(0, 1) + '*' + starAdder(text.substr(1, (text.length)));
}

console.log(starAdder('I take the stars from the sky.'));
