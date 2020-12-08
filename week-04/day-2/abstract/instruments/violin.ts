'use strict';

import { StringedInstrument } from './StringedInstrument';

export class Violin extends StringedInstrument {

  constructor(numberOfStrings?: number) {
    super('Violin', numberOfStrings ?? 4, 'Screech');
  }
}
