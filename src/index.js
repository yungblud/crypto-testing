import {
    encryptHmac,
    encryptHash,
    encryptCipherIv,
    decryptCipherIv,
} from './crypto-testing'

console.log(encryptHmac('hello world'))
console.log(encryptHash('hello world'))

console.log(encryptCipherIv('hello world'))
console.log(decryptCipherIv('hello world'))
