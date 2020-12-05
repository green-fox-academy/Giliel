'use strict';

//: the 0 from the Fibonacci sequence is the n = 0
function fibonacciCounter(n: number): number {
  if (n < 1) {
    return 0;
  } else if (n <= 2) {
    return 1;
  }
  return fibonacciCounter(n - 1) + fibonacciCounter(n - 2);
}

console.log(fibonacciCounter(5));

//: the 0 from the Fibonacci sequence is the n = 1
function fibonacciNth(numberNth: number): number {
  return fibonacciCounter(numberNth - 1);
}

console.log(fibonacciNth(5));
