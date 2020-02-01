"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptCipherIv = exports.encryptCipherIv = exports.encryptHash = exports.encryptHmac = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var secretKey = 'abcd';
var iv = '1234';

var encryptHmac = function encryptHmac(pureString) {
  return _crypto["default"].createHmac('sha256', secretKey).update(pureString).digest('hex');
};

exports.encryptHmac = encryptHmac;

var encryptHash = function encryptHash(pureString) {
  return _crypto["default"].createHash('sha256').update(pureString).digest('hex');
};

exports.encryptHash = encryptHash;

var encryptCipherIv = function encryptCipherIv(pureString) {
  var cipher = _crypto["default"].createCipheriv('aes-256-gcm', Buffer.alloc(32, secretKey, 'binary'), Buffer.alloc(16, iv, 'binary'));

  var encrypted = cipher.update(pureString, 'utf8', 'hex');
  return encrypted;
};

exports.encryptCipherIv = encryptCipherIv;

var decryptCipherIv = function decryptCipherIv(pureString) {
  var encrypted = encryptCipherIv(pureString);

  var decipher = _crypto["default"].createDecipheriv('aes-256-gcm', Buffer.alloc(32, secretKey, 'binary'), Buffer.alloc(16, iv, 'binary'));

  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  return decrypted;
};

exports.decryptCipherIv = decryptCipherIv;