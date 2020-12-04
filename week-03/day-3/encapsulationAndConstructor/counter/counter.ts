'use strict';

class Counter {
  private _number: number;
  private _initialNumber: number;

  constructor(number?: number) {
    this._number = number ?? 0;
    this._initialNumber = number ?? 0;
  }

  public add(number?: number): void {
   this._number += number ?? 1;
  }

  public get(): number {
    return this._number;
  }
  public reset(): void {
    this._number = this._initialNumber;
  }
}

export { Counter };
