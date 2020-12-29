'use strict';

import { Animal } from './animal';

export class Mammal extends Animal {

  constructor(name: string, gender?: string) {
    super(name, gender);
  }

  public breed(): string {
    return `pushing miniature versions out.`;
  }
}
