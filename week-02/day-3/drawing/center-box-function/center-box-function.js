'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
function drawSquare(size) {
  ctx.strokeRect((300 - size / 2), (200 - size / 2), size, size);
}

drawSquare(50);
drawSquare(100);
drawSquare(200);