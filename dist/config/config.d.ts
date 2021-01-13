export declare const CONFIG: Readonly<{
    ENCRYPT_DECRYPT: {
        SECRET_KEY: string;
    };
    EMAIL: {
        AUTH: {
            username: string;
            password: string;
        };
        FRONTEND_HOST: string;
        FRONTEND_EMAIL_VERIFY_LINK: string;
        FRONTEND_RESET_PASSWORD_LINK: string;
        BACKEND_HOST: string;
        VERIFIED_KEY: string;
        FORGOT_PWD_LINK_EXPIRY: number;
    };
    USER: {
        PROFILE_IMG_PATH: string;
    };
    DEFAULTDATA: {
        BACKEND_CLIENT_HOST: string;
    };
}>;
