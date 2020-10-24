// @ts-nocheck

import test from 'ava'
import * as crypto from '../package/index.cjs'

const seed = require('./data/example.json')

test.before(t => {

  crypto.keychain('sissel siv', {
    standard: [],
    jekyll: [],
    shopify: [],
    eleventy: []
  })

  t.context.crypto = crypto.secret('jekll')

})



test.serial('Cryptographer', t => {

  const encode = t.context.crypto.encode('axj')
  const decode = t.context.crypto.decode(encode)

  t.log(decode.engine, t.context.crypto, decode)
  t.pass()

})

test('Keychain is frozen, no password can be added', t => {

  const error = t.throws(() => crypto.keychain([ 'will_fail', 'not_allowed' ]))

   t.log(error)

})
