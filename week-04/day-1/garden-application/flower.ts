'use strict';

import { Plant } from './Plant';

export class Flower extends Plant {
  constructor(color: string) {
    super(color)
    this._name = 'Flower';
    this._needsWaterLimit = 5;
    this._wateringEffectivness = .75;
  }
}
