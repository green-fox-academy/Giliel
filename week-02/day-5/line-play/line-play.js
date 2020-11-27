'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
function drawLine(startX, startY, lineToX, lineToY, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(lineToX, lineToY);
  ctx.stroke();
}

let lineCount = 14;

for (let i = 0; i <= lineCount; i++) {

  let startY = (i * canvas.height / (lineCount + 2)) + ((canvas.height / lineCount) * 2);
  let lineToX = (i * canvas.width / (lineCount + 1)) + (canvas.width / lineCount);

  let startX = (i * canvas.width / (lineCount + 2)) + ((canvas.width / lineCount) * 2);
  let lineToY = (i * canvas.height / (lineCount + 1)) + (canvas.height / lineCount);

  let color = 'lime';
  drawLine(0, startY, lineToX, canvas.height, color);
  color = 'violet';
  drawLine(startX, 0, canvas.width, lineToY, color);
}