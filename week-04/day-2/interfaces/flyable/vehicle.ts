'use strict';

export abstract class Vehicle {
  protected _name: string;
  protected _fuelType: string;
  protected _tankSize: number;
  protected _fuel: number;

  constructor() { }
}