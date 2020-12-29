'use strict';

export abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender: string;
  protected _isHungry: boolean;

  constructor(name: string, gender?: string) {
    this._name = name;
    this._age = 0;
    this._gender = gender ?? 'female';
    this._isHungry = true;
  }

  public getName(): string {
    return this._name;
  }

  public getStatus(): string {
    return `${this._name} is a ${this._age} years old ${this._gender} ${this.constructor.name}. ${this._name} is ${(this._isHungry === true) ? '' : 'not '}hungry.`;
  }

  public feed(): void {
    this._isHungry = false;
  }

  public abstract breed(): string;
}
