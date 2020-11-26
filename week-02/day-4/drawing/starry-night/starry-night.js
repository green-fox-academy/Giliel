'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
function rect(startX, startY, width, height, color) {

  ctx.fillStyle = color;
  ctx.fillRect(startX, startY, width, height);
}

function stars(starNum) {

  for (let i = 0; i < starNum; i++) {

    rect((590 * Math.random()), (390 * Math.random()), 10, 10, (`rgba(255, 255, 255, ${0.4 + Math.random()})`));
  }
}

rect(0, 0, 600, 400, 'black');
stars(6);