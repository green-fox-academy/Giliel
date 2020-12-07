'use strict';

import { Person } from './Person';
import { Student } from './Student';
import { Mentor } from './Mentor';

export class Cohort extends Person {
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string) {
    super();
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  public addStudent(student: Student): void {
    this._students.push(student);
  }

  public addMentor(mentor: Mentor): void {
    this._mentors.push(mentor);
  }

  public info(): void {
    console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`);
  }
}
