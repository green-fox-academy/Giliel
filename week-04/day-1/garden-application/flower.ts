'use strict';

import { Plant } from './Plant';

export class Flower extends Plant {
  constructor(color: string) {
    super('Flower', color, 5, .75);
  }
}
