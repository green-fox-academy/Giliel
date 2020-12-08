'use strict';

import { Instrument } from './Instrument';

export abstract class StringedInstrument extends Instrument {
  protected _numberOfStrings: number;
  protected _sound: string;

  constructor(name: string, numberOfStrings: number, sound: string) {
    super(name);
    this._numberOfStrings = numberOfStrings;
    this._sound = sound;
  }

  protected sound(): string {
    return this._sound;
   }

  public play(): void {
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument tha goes ${this.sound()}`);
  }
}
