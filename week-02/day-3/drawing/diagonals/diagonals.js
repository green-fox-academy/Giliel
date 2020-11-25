'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
let color = 'red';

for (let i = 0; i <= 40; i++) {

  let startY = 400 - 20 * i;

  if (startY === 0) {
    color = 'green';
  } else {
    color = 'red';
  }

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, startY);
  ctx.lineTo(600, 800 - 20 * i);
  ctx.stroke();
}