'use strict';

import * as test from 'tape';
import { Apple } from './apples';

test('get string', t => {
  const fruit = new Apple();

  let actual = fruit.getApple();
  let expected = 'apples';

  t.equal(actual, expected);
  t.end();
});
