'use strict';

export class NumberOperations {
  public sumNumbers(numberList: number[]): number {
    let result: number = 0;
    for (let i: number = 0; i < numberList.length; i++) {
      result += numberList[i];
    }
    return result;
  };
}
