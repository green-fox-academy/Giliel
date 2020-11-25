'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.
function drawLine(startX, startY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

for (let i = 0; i < 6; i++) {

  drawLine(i * 60, 0);
}