'use strict';

export class Sponsor {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _company: string;
  private _hiredStudent: number;

  constructor(name?: string, age?: number, gender?: string, company?: string, hiredStudent?: number) {
    this._name = name ?? 'Jane Doe';
    this._age = age ?? 30;
    this._gender = gender ?? 'female';
    this._company = company ?? 'Google';
    this._hiredStudent = hiredStudent ?? 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} years old ${this._gender} who represents ${this._company} and hired ${this._hiredStudent} students so far.`);
  }

  public getGoal(): void {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }

  public hire() {
    this._hiredStudent += 1;
  }
}
