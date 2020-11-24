'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(textToReverse: string): string {
  let letters: string[] = textToReverse.split('');
  letters.reverse();
  return textToReverse = letters.join('');
}

console.log(reverse(toBeReversed));

export = reverse;