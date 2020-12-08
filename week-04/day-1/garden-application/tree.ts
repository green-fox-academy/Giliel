'use strict';

import { Plant } from './Plant';

export class Tree extends Plant {
  constructor(color: string) {
    super(color)
    this._name = 'Tree';
    this._needsWaterLimit = 10;
    this._wateringEffectivness = .4;
  }
}
