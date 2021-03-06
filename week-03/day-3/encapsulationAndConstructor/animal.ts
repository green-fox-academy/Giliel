'use strict';

/* Create an Animal class

    Every animal has a hunger value, which is a whole number
    Every animal has a thirst value, which is a whole number
    when creating a new animal object these values are created with the default 50 value
    Every animal can eat() which decreases their hunger by one
    Every animal can drink() which decreases their thirst by one
    Every animal can play() which increases both by one */

export class Animal {
  _hunger: number;
  _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat(): void {
    this._hunger -= 1;
  }

  public drink(): void {
    this._thirst -= 1;
  }

  public play(): void {
    this._hunger += 1;
    this._thirst += 1;
  }
}

let tigerCub: Animal = new Animal();
console.log(tigerCub);

tigerCub.play();
console.log(tigerCub);

tigerCub.drink();
console.log(tigerCub);

tigerCub.eat();
console.log(tigerCub);
