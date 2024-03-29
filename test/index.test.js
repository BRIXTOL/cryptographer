// @ts-nocheck

import test from 'ava';
import { Cryptographer } from '../package/index.cjs';

test.before((t) => {
  t.context.crypto = Cryptographer('$ecret');
});

test.serial('String value to encode and decode', (t) => {

  const encode = t.context.crypto.encode('some string');
  const decode = t.context.crypto.decode(encode);

  t.is('some string', decode);
  t.pass('String test passes');

});

test.serial('Incorrect secret', (t) => {

  const crypto = Cryptographer('invalid iv');

  // use the above instance to decode
  const encode = crypto.encode('want to fight?');

  // use context instance
  const decode = t.context.crypto.decode(encode);

  t.not('want to fight?', decode);
  t.pass('Object test passes');

});

test.serial('Object value to encode and decode', (t) => {

  const encode = t.context.crypto.encode({ foo: 'bar', bar: 'foo' });
  const decode = t.context.crypto.decode(encode);

  t.deepEqual({ foo: 'bar', bar: 'foo' }, decode);
  t.pass('Object test passes');

});
