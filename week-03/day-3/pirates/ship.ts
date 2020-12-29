'use strict';

import { Pirate } from './pirate';

export class Ship {
  protected _crew: Pirate[];
  protected _captain: Pirate;

  constructor() {
  this._crew = [];
  }

  public fillShip(): void {
    this._captain = new Pirate(true);
    let rand: number = Math.random() * 7 + 1;
    for (let i: number = 0; i < rand; i++) {
      this._crew.push(new Pirate());
    }
  }
}
