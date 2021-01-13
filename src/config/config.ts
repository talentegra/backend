export const CONFIG = Object.freeze({
    ENCRYPT_DECRYPT:{
        SECRET_KEY:"eRadAdminSecret"
    },
    EMAIL:{
       /*  AUTH:{
            username:"desiree.vonrueden9@ethereal.email",
            password:"uFd2R2YAsNWdtcvxp3"
        }, */
        AUTH:{
            username:"servicedesk@posiflexindia.com",
            password:"Juk25964"
        },
        FRONTEND_HOST:"http://eradcare.com:3000/",
        FRONTEND_EMAIL_VERIFY_LINK:"emailverification/",
        FRONTEND_RESET_PASSWORD_LINK:"resetpassword/",        
	BACKEND_HOST:"http://pizzachatbot-msvh.uc.r.appspot.com/",
        VERIFIED_KEY:"verified",
        FORGOT_PWD_LINK_EXPIRY:24 // in hours
    },
    USER:{
        PROFILE_IMG_PATH:"D://Results"
    },
    DEFAULTDATA:{
    BACKEND_CLIENT_HOST:"http://eradcare.com:3004/"
    }
});
