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

function drawLinePlay(divider) {

  let quarterWidth = canvas.width / divider;
  let quarterHeight = canvas.height / divider;

  for (let quarterNumY = 0; quarterNumY < divider; quarterNumY++) {
    for (let quarterNumX = 0; quarterNumX < divider; quarterNumX++) {
      for (let i = 0, lineCount = 14; i <= lineCount; i++) {
        let startX1 = 0 + (quarterNumX * quarterWidth);
        let startY1 = (i * quarterHeight / (lineCount + 2)) + ((quarterHeight / lineCount) * 2) + (quarterNumY * quarterHeight);
        let lineToX1 = (i * quarterWidth / (lineCount + 1)) + (quarterWidth / lineCount) + (quarterNumX * quarterWidth);
        let lineToY1 = quarterHeight + (quarterNumY * quarterHeight);

        let startX2 = (i * quarterWidth / (lineCount + 2)) + ((quarterWidth / lineCount) * 2) + (quarterNumX * quarterWidth);
        let startY2 = 0 + (quarterNumY * quarterHeight);
        let lineToX2 = quarterWidth + (quarterNumX * quarterWidth);
        let lineToY2 = (i * quarterHeight / (lineCount + 1)) + (quarterHeight / lineCount) + (quarterNumY * quarterHeight);

        let color = 'lime';
        drawLine(startX1, startY1, lineToX1, lineToY1, color);
        color = 'violet';
        drawLine(startX2, startY2, lineToX2, lineToY2, color);
      }
    }
  }
}

drawLinePlay(4);


