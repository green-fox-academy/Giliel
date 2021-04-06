'use strict';

import { Plant } from './Plant';

export class Garden {
  protected _plantsOfGarden: Plant[] = [];

  public gardenWatering(waterAmount: number): void {
    console.log(`Watering with ${waterAmount}`);
    let needsWater: Plant[] = this._plantsOfGarden.filter(plant => (plant.isNeedsWater() === true));
    needsWater.map(plant => plant.watering(waterAmount / needsWater.length));
    this.gardenStatus();
  }

  public gardenStatus(): void {
    this._plantsOfGarden.forEach((plant: Plant) => plant.plantStatus(plant));
    console.log('\n');
  }

  public addPlant(newPlant: Plant): void {
    this._plantsOfGarden.push(newPlant);
  }
}
