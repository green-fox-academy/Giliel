
'use strict';

export class Pirate {
  protected _consumedRum: number;
  protected _isAlive: boolean;
  protected _hasParrot: boolean;

  constructor(hasParrot?: boolean) {
    this._consumedRum = 0;
    this._isAlive = true;
    this._hasParrot = hasParrot ?? false;
  }

  public drinkSomeRum(): void {
    if (this._isAlive) {
      this._consumedRum += 1;
    } else {
      console.log(`He's dead.`);
    }
  }

  public howsItGoingMate(): void {
    if (this._isAlive) {
      if (this._consumedRum < 5) {
        console.log(`Pour me anudder!`);
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
        this._consumedRum = 0;
      }
    } else {
      console.log(`He's dead.`);
    }
  }

  public die(): void {
    this._isAlive = false;
  }

  public brawl(enemy: Pirate): void {
    if (this._isAlive && enemy._isAlive) {
      let chance: number = Math.random() * 3;
      if (chance < 1) {
        this.die();
      } else if (chance < 2) {
        enemy.die();
      } else {
        this._consumedRum = 0;
        enemy._consumedRum = 0;
      }
    }
  }
}
