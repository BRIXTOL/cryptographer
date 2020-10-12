# @brixtol/cryptographer

Cryptographer with IV used for encryption and decrytption of various data types with [crypto](#). Uses an [aes-256-gcm](https://en.wikipedia.org/wiki/Galois/Counter_Mode) algorithm and supports multiple ciphers.

## Why?

For encryption/decrytion of sensitive data veging sent across the wire.

## Install

```cli
pnpm i @brixtol/cryptographer --save-dev
```

> This project is not available on the public NPM registry

## Usage

```js
import cryptographer from "@brixtol/cryptographer";

const crypto = cryptographer("secret", "aes-256-ctr");

// Encoding
crypto.encode({ foo: "bar" });

// Decoding, eg: { foo: "bar" }
crypto.decode("12345678910abcdefghijkmnopqrstuvwxyz");

// Ciphers
crypto.ciphers();

// Hash
crypto.hash("secret", "md5");
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