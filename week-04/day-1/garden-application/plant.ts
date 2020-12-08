'use strict';

export class Plant {
  protected _plantType: string;
  protected _color: string;
  protected _waterAmount: number;
  protected _needsWaterLimit: number;
  protected _wateringEffectivness: number;

  constructor(plantType: string, color: string, needsWaterLimit: number, wateringEffectivness: number) {
    this._plantType = plantType;
    this._color = color;
    this._waterAmount = 0;
    this._needsWaterLimit = needsWaterLimit;
    this._wateringEffectivness = wateringEffectivness;
  }

  public isNeedsWater(): boolean {
    return this._waterAmount < this._needsWaterLimit;
  }

  public plantStatus(plant: Plant): void {
    console.log(`The ${this._color} ${this._plantType} ${(plant.isNeedsWater() === true) ? 'needs' : 'doesn\'t needs'} water.`);
  }

  public watering(water: number): void {
    this._waterAmount += (this._wateringEffectivness * water);
  }
}
