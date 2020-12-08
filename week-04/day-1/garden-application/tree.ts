'use strict';

import { Plant } from './Plant';

export class Tree extends Plant {
  constructor(color: string) {
    super('Tree', color, 10, .4);
  }
}
