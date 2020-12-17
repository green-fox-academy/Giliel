'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble(list: number[], descending: boolean): number[] {
  let temp: number = 0;

  for (let i: number = 0; i < list.length; i++) {
    for (let j: number = 0; j < (list.length - i - 1); j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  if (descending) {
    list.reverse();
  }
  return list;
}

console.log(bubble([34, 12, 24, 9, 5], false));
//  should print [5, 9, 12, 24, 34]

console.log(bubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
