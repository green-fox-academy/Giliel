'use strict';

import { Person } from './Person';

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string, skippedDays?: number) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization ?? 'The School of Life';
    this._skippedDays = skippedDays ?? 0;
  }

  public specificIntroduction(): string {
    return ` from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already`;
  }

  public getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  public skipDays(numberOfDays: number): void {
    this._skippedDays += numberOfDays;
  }
}
