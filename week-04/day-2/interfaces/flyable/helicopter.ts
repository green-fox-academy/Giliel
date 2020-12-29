'use strict';

import { Vehicle } from './vehicle';
import { Flyable } from './flyable';

export class Helicopter extends Vehicle implements Flyable {

  constructor() {
    super();
  }

  public land(): string {
    return `I am landing.`;
  }

  public fly(): string {
    return `I am flying by my propellers.`;
  }

  public takeOff(): string {
    return `I am taking off.`;
  }
}
