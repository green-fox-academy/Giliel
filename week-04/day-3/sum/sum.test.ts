'use strict';

import * as test from 'tape';
import { NumberOperations } from './sum';

test('Test 1: sum of the elements of an empty list', t => {
  let numbers: NumberOperations = new NumberOperations();
  let numberList: number[] = [];

  let actual = (numbers.sumNumbers(numberList));
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('Test 2: sum of the elements of a list has one element', t => {
  let numbers: NumberOperations = new NumberOperations();
  let numberList: number[] = [7];

  let actual = (numbers.sumNumbers(numberList));
  let expected = 7;

  t.equal(actual, expected);
  t.end();
});

test('Test 3: sum of the elements of a list has multiple elements', t => {
  let numbers: NumberOperations = new NumberOperations();
  let numberList: number[] = [8, 2, 12];

  let actual = (numbers.sumNumbers(numberList));
  let expected = 22;

  t.equal(actual, expected);
  t.end();
});
