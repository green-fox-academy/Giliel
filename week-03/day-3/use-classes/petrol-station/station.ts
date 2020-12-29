'use strict';

import { Car } from './car';

export class Station {
  protected _gasAmount: number;

  constructor() {
    this._gasAmount = 1000;
  }

  public get gasAmount() {
    return this._gasAmount;
  }

  public refill(car: Car): void {
    let refillAmount: number = car.capacity - car.gasAmount;
    if (refillAmount <= this._gasAmount) {
      this._gasAmount -= refillAmount;
      car.gasAmount += refillAmount;
    } else if (this._gasAmount != 0) {
      car.gasAmount += this._gasAmount;
      this._gasAmount = 0;
    } else {
      console.log(`The Petrol Station is closed.`);
    }
  }
}
