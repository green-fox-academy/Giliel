'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.
function drawLine(startX, startY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 50, startY);
  ctx.stroke();
}

for (let i = 0; i < 3; i++) {

  drawLine(i * 80, 60);
}