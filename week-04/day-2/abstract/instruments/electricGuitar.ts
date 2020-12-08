'use strict';

import { StringedInstrument } from './StringedInstrument';

export class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings?: number) {
    super('Electric Guitar', numberOfStrings ?? 6, 'Twang');
  }
}
