'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.
function drawSquare(startX, startY) {
  ctx.fillRect(startX, startY, 50, 50);
}

drawSquare(70, 40);
drawSquare(200, 240);
drawSquare(400, 120);