const isDevelopment = process.env.NODE_ENV === 'development';
const setting = {
    origin: isDevelopment ? process.env.LOCAL_CLIENT_URL : process.env.REMOTE_CLIENT_URL,
}

export {
    isDevelopment,
    setting
}