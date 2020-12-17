'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(texts: string[]): void {
  texts.forEach(function (text: string): void {
    console.log(text);
  });
}

printParams(['First text', 'Second text']);
