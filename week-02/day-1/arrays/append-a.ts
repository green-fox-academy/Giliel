'use strict';

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ['koal', 'pand', 'zebr'];

animals.forEach(function(animal: string, i: number): void {
  animal += 'a';
  animals[i] = animal;
});

console.log(animals);
