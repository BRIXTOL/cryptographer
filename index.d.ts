import { CipherCCMOptions } from"crypto"


interface Cryptographers {
  encode: (data: string | object | string[] | object[] | number) => string,
  decode: (data: string) => string | object | string[] | object[] | number
}

type IAlgorithm =  (
 "aes-256-cbc" |
 "aes-256-cbc-hmac-sha1" |
 "aes-256-cbc-hmac-sha256" |
 "aes-256-cfb" |
 "aes-256-cfb1" |
 "aes-256-cfb8" |
 "aes-256-ctr" |
 "aes-256-ofb" |
 "aes256" |
 "camellia-256-cbc" |
 "camellia-256-cfb" |
 "camellia-256-cfb1" |
 "camellia-256-cfb8" |
 "camellia-256-ofb" |
 "camellia256"
)

export default function(
  secret: string,
  algorithm: IAlgorithm,
  options: CipherCCMOptions
): Cryptographers
