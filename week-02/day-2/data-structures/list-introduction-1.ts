'use strict';

//Create an empty list which will contain names (strings)
let names: string[] = [];

//Print out the number of elements in the list
console.log(names.length);

//Add William to the list
names[0] = 'William';

//Print out whether the list is empty or not
if (names.length) {
  console.log('The list is not empty.');
} else {
  console.log('The list is empty.');
}

//Add John to the list
names.push('John');

//Add Amanda to the list
names.push('Amanda');

//Print out the number of elements in the list
console.log(names.length);

//Print out the 3rd element
console.log(names[2]);

/*Iterate through the list and print out each name
William
John
Amanda */

names.forEach(function(name: string): void {
  console.log(name);
});

/*Iterate through the list and print
1. William
2. John
3. Amanda*/

names.forEach(function(name: string, num: number): void {
  console.log(`${num + 1}. ${name}`);
});

//Remove the 2nd element
names.splice(1, 1);

/*Iterate through the list in a reversed order and print out each name
Amanda
William */
names.reverse();
names.forEach(function(name: string): void {
  console.log(name);
});

//Remove all elements
names.splice(0, names.length);