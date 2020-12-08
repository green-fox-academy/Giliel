'use strict';

import { Plant } from './Plant';

export class Garden {
  protected _plantsOfGarden: Plant[];

  constructor(plantsOfGarden: Plant[]) {
    this._plantsOfGarden = plantsOfGarden;
  }

  public gardenWatering(waterAmount: number): void {
    console.log(`Watering with ${waterAmount}`);
    let needsWater: Plant[] = this._plantsOfGarden.filter(plant => (plant.isNeedsWater() === true));
    needsWater.map(plant => plant.watering(waterAmount / needsWater.length));
    this.get();
  }

  public get(): void {
    this._plantsOfGarden.forEach(plant => plant.plantInfo(plant));
    console.log('\n');
  }

  public addPlant(name: any, color: string): void {
    this._plantsOfGarden.push(...[new name(color)]);
  }
}
