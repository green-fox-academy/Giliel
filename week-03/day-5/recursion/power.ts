'use strict';

function powerN(base: number, n: number) {
  if (n === 0) {
    return 1;
  }
  return base * powerN(base, (n - 1));
}

console.log(powerN(3, 2));