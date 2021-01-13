'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const timedTextPrinting = (text, seconds) => {
  setTimeout(() => {
    console.log(text);
  }, seconds);
}

const printing = () => {
  console.log('apple');
  timedTextPrinting('pear', 1000);
  timedTextPrinting('melon', 3000);
  timedTextPrinting('grapes', 5000);
};

printing();
