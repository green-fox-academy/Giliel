'use strict';

const test = require('tape');
const isAnagram = require('./anagram');

test('Test1: same texts, are not anagrams', t => {
  let actual = isAnagram('róka', 'róka');
  let expected = false;

  t.equal(actual, expected);
  t.end();
})

test('Test2: two words, are anagrams', t => {
  let actual = isAnagram('róka', 'rakó');
  let expected = true;

  t.equal(actual, expected);
  t.end();
})

test('Test3: two texts, are not anagrams', t => {
  let actual = isAnagram('róka', 'paróka');
  let expected = false;

  t.equal(actual, expected);
  t.end();
});

test('Test4: two texts with 2 and 3 spaces, are anagrams', t => {
  let actual = isAnagram('egy értékre ments', 'két egér sem nyert');
  let expected = true;

  t.equal(actual, expected);
  t.end();
});
