'use strict';

import { Garden } from './Garden';
import { Flower } from './Flower';
import { Tree } from './Tree';

let exampleGarden: Garden = new Garden();

exampleGarden.addPlant(Flower, 'yellow');
exampleGarden.addPlant(Flower, 'blue');
exampleGarden.addPlant(Tree, 'purple');
exampleGarden.addPlant(Tree, 'orange');

exampleGarden.gardenStatus();
exampleGarden.gardenWatering(40);
exampleGarden.gardenWatering(70);

console.log(exampleGarden);
