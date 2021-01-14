"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
exports.CONFIG = Object.freeze({
    ENCRYPT_DECRYPT: {
        SECRET_KEY: "eRadAdminSecret"
    },
    EMAIL: {
        AUTH: {
            username: "servicedesk@posiflexindia.com",
            password: "Juk25964"
        },
        FRONTEND_HOST: "http://eradcare.com:3000/",
        FRONTEND_EMAIL_VERIFY_LINK: "emailverification/",
        FRONTEND_RESET_PASSWORD_LINK: "resetpassword/",
        BACKEND_HOST: "http://pizzachatbot-msvh.uc.r.appspot.com/",
        VERIFIED_KEY: "verified",
        FORGOT_PWD_LINK_EXPIRY: 24
    },
    USER: {
        PROFILE_IMG_PATH: "D://Results"
    },
    DEFAULTDATA: {
        BACKEND_CLIENT_HOST: "http://eradcare.com:3004/"
    }
});
//# sourceMappingURL=config.js.map