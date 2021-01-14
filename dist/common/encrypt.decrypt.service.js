"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEncryptedMD5Value = exports.getEncryptedShaValue = exports.decryptAESString = exports.getSecretKeyInBase64Format = void 0;
const CryptoJS = require("crypto-js");
const config_1 = require("../config/config");
const getSecretKeyInBase64Format = () => {
    var words = CryptoJS.enc.Utf8.parse(config_1.CONFIG.ENCRYPT_DECRYPT.SECRET_KEY);
    var base64 = CryptoJS.enc.Base64.stringify(words);
    return base64;
};
exports.getSecretKeyInBase64Format = getSecretKeyInBase64Format;
const decryptAESString = (encryptedString) => {
    return CryptoJS.AES.decrypt(encryptedString, exports.getSecretKeyInBase64Format()).toString(CryptoJS.enc.Utf8);
};
exports.decryptAESString = decryptAESString;
const getEncryptedShaValue = (originalText) => {
    return CryptoJS.SHA256(originalText).toString();
};
exports.getEncryptedShaValue = getEncryptedShaValue;
const getEncryptedMD5Value = (shaValue) => {
    return CryptoJS.MD5(shaValue).toString();
};
exports.getEncryptedMD5Value = getEncryptedMD5Value;
//# sourceMappingURL=encrypt.decrypt.service.js.map