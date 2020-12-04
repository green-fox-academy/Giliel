'use strict';

function earsNumber(bunnies: number): number {
  if (bunnies === 0) {
    return 0;
  }
  return 2 + earsNumber(bunnies - 1);
}

console.log(earsNumber(8));