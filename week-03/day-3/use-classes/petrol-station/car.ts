'use strict';

export class Car {
  protected _gasAmount: number;
  protected _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  }

  public get gasAmount(): number {
    return this._gasAmount;
  }

  public set gasAmount(value: number) {
    this._gasAmount = value;
  }

  public get capacity(): number {
    return this._capacity;
  }
}
