'use strict';

export class Person {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this._name = name ?? 'Jane Doe';
    this._age = age ?? 30;
    this._gender = gender ?? 'female';
  }

  public specificIntroduction(): string {
    return '';
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} years old ${this._gender}` + this.specificIntroduction() + `.`);
  }

  public getGoal(): void {
    console.log(`My goal is: Live for the moment!`);
  }
}
