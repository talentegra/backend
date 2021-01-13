"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const config_1 = require("src/config/config");
exports.getSecretKeyInBase64Format = () => {
    var words = CryptoJS.enc.Utf8.parse(config_1.CONFIG.ENCRYPT_DECRYPT.SECRET_KEY);
    var base64 = CryptoJS.enc.Base64.stringify(words);
    return base64;
};
exports.decryptAESString = (encryptedString) => {
    return CryptoJS.AES.decrypt(encryptedString, exports.getSecretKeyInBase64Format()).toString(CryptoJS.enc.Utf8);
};
exports.getEncryptedShaValue = (originalText) => {
    return CryptoJS.SHA256(originalText).toString();
};
exports.getEncryptedMD5Value = (shaValue) => {
    return CryptoJS.MD5(shaValue).toString();
};
//# sourceMappingURL=encrypt.decrypt.service.js.map