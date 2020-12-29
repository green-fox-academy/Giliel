'use strict';

import { Animal } from './animal';
import { Flyable } from '../../interfaces/flyable/flyable';

export class Bird extends Animal implements Flyable {

  constructor(name: string, gender?: string) {
    super(name, gender);
  }

  public breed(): string {
    return `laying eggs.`;
  }

  public land(): string {
    return `I am landing.`;
  }

  public fly(): string {
    return `I am flying.`;
  }

  public takeOff(): string {
    return `I am taking off.`;
  }
}
