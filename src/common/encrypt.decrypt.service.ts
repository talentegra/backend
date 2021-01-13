import * as CryptoJS from "crypto-js";
import { CONFIG } from 'src/config/config';


export const getSecretKeyInBase64Format = ()=>{
    var words = CryptoJS.enc.Utf8.parse(CONFIG.ENCRYPT_DECRYPT.SECRET_KEY); 
    var base64 = CryptoJS.enc.Base64.stringify(words); 
    return base64;
}

export const decryptAESString = (encryptedString:string) =>{
    return CryptoJS.AES.decrypt(encryptedString, getSecretKeyInBase64Format()).toString(CryptoJS.enc.Utf8)
}

export const getEncryptedShaValue = (originalText:string)=>{
    return CryptoJS.SHA256(originalText).toString();
}

export const getEncryptedMD5Value = (shaValue:string)=>{
    return CryptoJS.MD5(shaValue).toString();
}