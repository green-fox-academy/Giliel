'use strict';

import { Reptile } from './reptile';
import { Mammal } from './mammal';
import { Bird } from './bird';

const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);

console.log(reptile.getStatus());
reptile.feed();
console.log(reptile.getStatus());