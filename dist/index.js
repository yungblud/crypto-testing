"use strict";

var _cryptoTesting = require("./crypto-testing");

console.log((0, _cryptoTesting.encryptHmac)('hello world'));
console.log((0, _cryptoTesting.encryptHash)('hello world'));
console.log((0, _cryptoTesting.encryptCipherIv)('hello world'));