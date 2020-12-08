'use strict';

export class Plant {
  protected _name: string;
  protected _color: string;
  protected _waterAmount: number;
  protected _needsWaterLimit: number;
  protected _wateringEffectivness: number;

  constructor(color: string) {
    this._name = 'Plant';
    this._color = color;
    this._waterAmount = 0;
    this._needsWaterLimit = 0;
    this._wateringEffectivness = 0;
  }

  public isNeedsWater(): boolean {
    if (this._waterAmount < this._needsWaterLimit) {
      return true;
    }
    return false;
  }

  public plantInfo(plant: Plant): void {

    if (plant.isNeedsWater() === true) {
      console.log(`The ${this._color} ${this._name} needs water.`);
    } else {
      console.log(`The ${this._color} ${this._name} doesn't needs water.`);
    }
  }

  public watering(water: number): void {
    this._waterAmount += (this._wateringEffectivness * water);
  }
}
