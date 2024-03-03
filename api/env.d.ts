declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            DB_URL: string;
            DB_NAME: string
            EXPIRE_TOKEN: string
            EMAIL_PASS: string
            PORT: string
            LOCAL_CLIENT_URL: string;
            REMOTE_CLIENT_URL: string;
        }
    }
}

export {};
