'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
function drawRect(color, startX, startY, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(startX, startY, width, height);
}

drawRect('red', 30, 40, 100, 80);
drawRect('green', 150, 190, 40, 80);
drawRect('purple', 380, 120, 70, 120);
drawRect('blue', 220, 60, 50, 30);