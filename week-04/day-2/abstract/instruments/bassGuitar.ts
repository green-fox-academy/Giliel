'use strict';

import { StringedInstrument } from './StringedInstrument';

export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings?: number) {
    super('Bass Guitar', numberOfStrings ?? 4, 'Duum-duum-duum');
  }
}
