'use strict';

//Create an empty map where the keys are integers and the values are characters
let introMap: { [key: number]: string } = {};

//Print out whether the map is empty or not
if (Object.keys(introMap).length === 0) {
  console.log('The map is empty.');
} else {
  console.log('The map is not empty.');
}

//Add the following key-value pairs to the map
/* Key 	Value
  97 	a
  98 	b
  99 	c
  65 	A
  66 	B
  67 	C */
Object.assign(introMap, { 97: 'a', 98: 'b', 99: 'c', 65: 'A', 66: 'B', 67: 'C' });

//Print all the keys
Object.keys(introMap).forEach(function (keys: string): void {
  console.log(keys);
});

//Print all the values
Object.values(introMap).forEach(function (values: string): void {
  console.log(values);
});

//Add value D with the key 68
Object.assign(introMap, { 68: 'D' });

//Print how many key-value pairs are in the map
console.log(Object.values(introMap).length);

//Print the value that is associated with key 99
console.log(introMap[99]);

//Remove the key-value pair where with key 97
delete introMap[97];

//Print whether there is an associated value with key 100 or not
if (introMap[100]) {
  console.log(Object.values(introMap[100]));
} else {
  console.log('There is no associated value with key 100.');
}

//Remove all the key-value pairs
introMap = {};
