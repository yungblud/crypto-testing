import { encryptHmac, encryptHash, encryptCipherIv } from './crypto-testing'

console.log(encryptHmac('hello world'))
console.log(encryptHash('hello world'))

console.log(encryptCipherIv('hello world'))
