'use strict';

//Create an empty map where the keys are integers and the values are characters
let introMap: { [key: number]: string } = {};

//Print out whether the map is empty or not
if (Object.keys(introMap).length === 0) {
  console.log('The map is empty.');
} else {
  console.log('The map is not empty.');
}
