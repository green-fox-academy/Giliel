'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
function boardSquare(startX, startY, size) {
  ctx.fillStyle = 'Orchid';
  ctx.fillRect(startX, startY, size, size);
}

for (let i = 0; i < 400; i += 20) {
  for (let j = 0; j < 600; j += 20) {
    boardSquare(j, i, 10);
  }
  for (let j = 10; j < 600; j += 20) {
    boardSquare(j, i + 10, 10);
  }
}