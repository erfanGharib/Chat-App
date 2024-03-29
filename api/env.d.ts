declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_URL: string;
            DB_NAME: string
            EXPIRE_TOKEN: string
            EMAIL_PASS: string
            PORT: string
            LOCAL_CLIENT_DOMAIN: string;
            REMOTE_CLIENT_DOMAIN: string;
            DB_USER: string;
            DB_PASSWORD: string;
            JWT_PRIVATE_KEY: string;
        }
    }
}

export {};
