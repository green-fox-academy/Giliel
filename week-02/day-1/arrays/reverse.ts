'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// -  Print the elements of the reversed `numbers`
let numbers: number[] = [3, 4, 5, 6, 7];

// 	   -  do it with the built in method
console.log(numbers.reverse());

//	   -  do it with creating a new temp array and a loop
let temp: number[] = [];

for (let i: number = numbers.length - 1; i >= 0; i--) {
  temp.push(numbers[i]);
}
numbers = temp;

console.log(numbers);
