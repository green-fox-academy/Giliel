'use strict';

import { Car } from './car';
import { Station } from './station';

let petrolStation: Station = new Station();
let kicsiKocsi: Car = new Car();

petrolStation.refill(kicsiKocsi);

console.log(petrolStation.gasAmount);
console.log(kicsiKocsi.gasAmount);