'use strict';

import * as test from 'tape';
import { Apple } from './apples';

test('get string', t => {
  const fruit: Apple = new Apple();

  let actual: string = fruit.getApple();
  let expected: string = 'apples';

  t.equal(actual, expected);
  t.end();
});
