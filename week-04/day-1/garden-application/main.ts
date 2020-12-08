'use strict';

import { Garden } from './Garden';
import { Plant } from './Plant';
import { Flower } from './Flower';
import { Tree } from './Tree';

function initialPlant(): Plant[] {
  return [
    new Flower('yellow'),
    new Flower('blue'),
    new Tree('purple'),
    new Tree('orange')
  ];
}

let exampleGarden: Garden = new Garden(initialPlant());

//exampleGarden.addPlant(Flower, 'red');

exampleGarden.get();
exampleGarden.gardenWatering(40);
exampleGarden.gardenWatering(70);
