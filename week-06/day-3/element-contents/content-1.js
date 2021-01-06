'use strict';

/* 1)  Append every paragraph with the last one's content.
   2)  Do the same again, but you should keep the cat strong. */

const mainElement = document.querySelectorAll('p');
const animals = document.querySelector('.animals');

const animalsHtml = animals.innerHTML;

mainElement.forEach(element => {
  element.append(' ' + animals.textContent);
});

mainElement.forEach(element => {
  element.innerHTML += ' ' + animalsHtml;
});
