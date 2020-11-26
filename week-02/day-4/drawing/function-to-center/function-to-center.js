'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
function lineToTheCenter(startX, startY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

for (let i = 0; i <= 600; i += 20) {

  lineToTheCenter(i, 0);
  lineToTheCenter(i, 400);

  if (i > 0 && i < 400) {
    lineToTheCenter(0, i);
    lineToTheCenter(600, i);
  }
}