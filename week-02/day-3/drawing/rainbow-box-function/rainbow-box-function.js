'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE


// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
function drawSquare(color, size) {
  ctx.strokeStyle = color;
  ctx.strokeRect((300 - size / 2), (200 - size / 2), size, size);
}

let red = 255;
let green = 0;
let blue = 0;
let sizeStep = 10;

for (let i = 0; i <= 400; i += sizeStep) {

  drawSquare(`rgb(${red}, ${green}, ${blue})`, i);

  let colorStep = 255 / (400 / 7 / sizeStep);

  if (red === 255 && green === 0 && blue < 255) {
    blue += colorStep;
  } else if (red > 0 && blue >= 255) {
    blue = 255;
    red -= colorStep;
  } else if (red <= 0 && green < 255) {
    red = 0;
    green += colorStep;
  } else if (green >= 255 && blue > 0) {
    green = 255;
    blue -= colorStep;
  } else if (red < 255 && blue <= 0) {
    red += colorStep;
    blue = 0;
  } else if (red >= 255 && blue === 0) {
    red = 255;
    green -= colorStep;
  }
}