'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
function drawLine(color, moveToX, moveToY, lineToX, lineToY) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(lineToX, lineToY);
  ctx.stroke();
}

function drawMultiColorBox(color1, color2, color3, color4, startX, startY, width) {
  drawLine(color1, startX, startY, (startX + width), startY);
  drawLine(color2, (startX + width), startY, (startX + width), (startY + width));
  drawLine(color3, (startX + width), (startY + width), startX, (startY + width));
  drawLine(color4, startX, (startY + width), startX, startY);
}

drawMultiColorBox('red', 'blue', 'purple', 'orange', 100, 100, 200);