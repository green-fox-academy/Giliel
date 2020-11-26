'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
function purpleSquare(start, size) {
  ctx.fillStyle = '#b145f3';
  ctx.fillRect(start, start, size, size);
  ctx.strokeRect(start, start, size, size);
}

for (let i = 10, start = 10; i < 70; i += 10) {
  purpleSquare(start, i);
  start += i;
}