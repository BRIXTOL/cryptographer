import { createHash, createDecipheriv, createCipheriv, getHashes, CipherCCMOptions } from 'crypto';

export declare type Algorithm = (
  'aes-256-cbc' |
  'aes-256-cbc-hmac-sha1' |
  'aes-256-cbc-hmac-sha256' |
  'aes-256-cfb' |
  'aes-256-cfb1' |
  'aes-256-cfb8' |
  'aes-256-ctr' |
  'aes-256-ofb' |
  'aes256' |
  'camellia-256-cbc' |
  'camellia-256-cfb' |
  'camellia-256-cfb1' |
  'camellia-256-cfb8' |
  'camellia-256-ofb' |
  'camellia256'
)

export declare type Data = string | object | string[] | object[] | number

/**
 * Creates hash of an string based on available hashes of platform
 */
const hash = (input: string, hash: string = 'md5'): string => {

  if (getHashes().indexOf(hash) !== -1) {
    return createHash(hash).update(input).digest('hex');
  }

  throw new Error('hash ' + hash + ' not found in your platform');

};

/**
 * Generate IV
 */
const iv = (key: string, length: number = 16): string => key.substring(length);

/**
 * Normalize string
 */
const normalizeInput = (input: Data): string => {

  if (input === null || typeof input === 'undefined') {
    throw new Error('required origin');
  }

  if (typeof input === 'object') {
    input = JSON.stringify(input);
  }

  if (typeof input !== 'string') {
    input = input.toString();
  }

  return input;

};

/**
 * If is JSON string then parse, else just return
 */
const normalizeOutput = (input: string): unknown => {

  try {

    return JSON.parse(input);

  } catch (e) {

    return input;

  }

};

/**
 * Encode string
 */
function encode (input: Data) {

  input = normalizeInput(input);

  const cipher = createCipheriv(
    this.algorithm,
    this.key,
    this.iv,
    this.options
  );

  return cipher.update(input, 'utf8', 'hex') + cipher.final('hex');
}

/**
 * Decode string
 */
function decode (input: any) {

  input = normalizeInput(input);

  const decipher = createDecipheriv(
    this.algorithm,
    this.key,
    this.iv,
    this.options
  );

  const decoded = decipher.update(input, 'hex', 'utf8') + decipher.final('utf8');

  return normalizeOutput(decoded);
}

/**
 * Cryptographer
 */
export function Cryptographer (
  secret: string,
  algorithm?: Algorithm,
  options?: CipherCCMOptions
) {

  if (typeof algorithm === 'undefined') algorithm = 'aes-256-ctr';

  const state: Partial<{
    key: string,
    iv: string,
    algorithm: Algorithm,
    options: CipherCCMOptions
  }> = {};

  const algorithms = [
    'aes-256-cbc',
    'aes-256-cbc-hmac-sha1',
    'aes-256-cbc-hmac-sha256',
    'aes-256-cfb',
    'aes-256-cfb1',
    'aes-256-cfb8',
    'aes-256-ctr',
    'aes-256-ofb',
    'aes256',
    'camellia-256-cbc',
    'camellia-256-cfb',
    'camellia-256-cfb1',
    'camellia-256-cfb8',
    'camellia-256-ofb',
    'camellia256'
  ];

  if (typeof secret !== 'string' || secret === '') {
    throw new Error('required an string key');
  }

  if (algorithm !== 'aes-256-ctr' && algorithms.indexOf(algorithm) < 0) {
    throw new Error(`"${algorithm}" is not supported`);
  }

  state.algorithm = algorithm;
  state.key = hash(secret);
  state.iv = iv(state.key);
  state.options = options;

  return {
    encode: encode.bind(state),
    decode: decode.bind(state)
  };

};
