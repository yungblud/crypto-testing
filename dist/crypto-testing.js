"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptCipherIv = exports.encryptCipherIv = exports.encryptHash = exports.encryptHmac = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var secretKey = 'abcdefg12345!@#$%';

var encryptHmac = function encryptHmac(pureString) {
  console.log(_crypto["default"].createHmac('sha256', secretKey));
  return _crypto["default"].createHmac('sha256', secretKey).update(pureString).digest('hex');
};

exports.encryptHmac = encryptHmac;

var encryptHash = function encryptHash(pureString) {
  console.log(_crypto["default"].createHash('sha256', secretKey));
  return _crypto["default"].createHash('sha256', secretKey).update(pureString).digest('hex');
};

exports.encryptHash = encryptHash;

var encryptCipherIv = function encryptCipherIv(pureString) {
  return _crypto["default"].createCipheriv('aes-256-gcm', secretKey).update(pureString, 'utf8');
};

exports.encryptCipherIv = encryptCipherIv;

var decryptCipherIv = function decryptCipherIv(pureString) {
  var encryptedByCipherIv = encryptCipherIv(pureString);
  return _crypto["default"].createDecipheriv('aes-256-gcm', secretKey).update(encryptedByCipherIv, 'base64');
};

exports.decryptCipherIv = decryptCipherIv;