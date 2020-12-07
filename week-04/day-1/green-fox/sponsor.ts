'use strict';

import { Person } from './Person';

export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudent: number;

  constructor(name?: string, age?: number, gender?: string, company?: string, hiredStudent?: number) {
    super(name, age, gender);
    this._company = company ?? 'Google';
    this._hiredStudent = hiredStudent ?? 0;
  }

  public specificIntroduction(): string {
    return ` who represents ${this._company} and hired ${this._hiredStudent} students so far`;
  }

  public getGoal(): void {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }

  public hire() {
    this._hiredStudent += 1;
  }
}
