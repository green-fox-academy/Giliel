'use strict';

function earCounter(bunnies: number): number {
  if (bunnies === 0) {
    return 0;
  }
  return (3 - (bunnies % 2)) + earCounter(bunnies - 1);
}

console.log(earCounter(22));
