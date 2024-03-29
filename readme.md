# @brixtol/cryptographer

Cryptographer with IV used for encryption and decryption of various data types with [crypto](https://nodejs.org/api/crypto.html). Uses an [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm and supports multiple ciphers.

## Why?

For encryption/decryption of sensitive data sent across the wire and processed within serverless functions. We opened sourced the package which is merely a wrapper for encryption/decryption with Crypto.

## Install

```cli
pnpm add @brixtol/cryptographer
```

## Usage

```ts
import { Cryptographer, md5 } from "@brixtol/cryptographer";

const crypto = Cryptographer(
  secret: "secret"
  , algorithm?: "aes-256-ctr"
  , options?: CipherCCMOptions
);

// Encoding
crypto.encode({ foo: "bar" });

// Decoding, eg: { foo: "bar" }
crypto.decode("12345678910abcdefghijkmnopqrstuvwxyz");

// Create a md5 hash
md5('hello world') // => 5eb63bbbe01eeed093cb22bb8f5acdc3

```

## Ciphers

- aes-256-cbc
- aes-256-cbc-hmac-sha1
- aes-256-cbc-hmac-sha256
- aes-256-cfb
- aes-256-cfb1
- aes-256-cfb8
- aes-256-ctr
- aes-256-ofb
- aes256
- camellia256

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
