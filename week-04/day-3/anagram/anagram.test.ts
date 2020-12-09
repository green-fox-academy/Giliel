'use strict';

import * as test from 'tape';
import { isAnagram } from './anagram';

test('Test1: two words, are anagrams', t => {
  let actual: boolean = isAnagram('róka', 'rakó');
  let expected: boolean = true;

  t.equal(actual, expected);
  t.end();
})

test('Test2: two texts with 2 and 3 spaces, are anagrams', t => {
  let actual: boolean = isAnagram('egy értékre ments', 'két egér sem nyert');
  let expected: boolean = true;

  t.equal(actual, expected);
  t.end();
})

test('Test3: two texts, are not anagrams', t => {
  let actual: boolean = isAnagram('róka', 'paróka');
  let expected: boolean = false;

  t.equal(actual, expected);
  t.end();
})

test('Test4: same texts, are not anagrams', t => {
  let actual: boolean = isAnagram('róka', 'róka');
  let expected: boolean = false;

  t.equal(actual, expected);
  t.end();
})
