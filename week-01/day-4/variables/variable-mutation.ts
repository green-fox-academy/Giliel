'use strict';

let a: number = 3;
a += 10;
console.log(a);

let b: number = 100;
b -= 7;
console.log(b);

let c: number = 44;
c *= 2;
console.log(c);

let d: number = 125;
d /= 5;
console.log(d);

let e: number = 8;
e **= 3;
console.log(e);

let f1: number = 123;
let f2: number = 345;
let f1Bigger: boolean = (f1 > f2);
if (f1Bigger) {
  console.log('f1 bigger than f2');
} else {
  console.log('f1 not bigger than f2');
}

let g1: number = 350;
let g2: number = 200;
let g2Bigger: boolean = ((g2 * 2) > g1);
if (g2Bigger) {
  console.log('the double of g2 is bigger than g1');
} else {
  console.log('the double of g2 is not bigger than g1');
}

let h: number = 1357988018575474;
let hDivisor: boolean = ((h % 11) == 0);
if (hDivisor) {
  console.log('11 is a divisor of h');
} else {
  console.log('11 is not a divisor of h');
}

let ii1: number = 10;
let ii2: number = 3;
let iRelations: boolean = ((ii1 > (ii2 ** 2)) && (ii1 < (ii2 ** 3)));
if (iRelations) {
  console.log('ii1 is higher than i2 squared and smaller than ii2 cubed');
} else {
  console.log('ii1 is not higher than i2 squared and/or not smaller than ii2 cubed');
}

let j: number = 1521;
let jDivisable: boolean = (((j % 3) == 0) || ((j % 5) == 0));
if (jDivisable) {
  console.log('j is divisable by 3 or 5');
} else {
  console.log('j is not divisible by either 3 or 5');
}