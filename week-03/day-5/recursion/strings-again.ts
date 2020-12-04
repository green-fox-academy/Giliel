'use strict';

function xRemover(text: string): string {
  if (text.length === 0) {
    return '';
  }
  return text.substr(0, 1).replace(/x/i, '') + xRemover(text.substr(1, (text.length)));
}

console.log(xRemover('So much X and x: OOXXxxxOXXXOxxxOXXXOxxxXXOO'));
