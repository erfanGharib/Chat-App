const baseUploadDir = 'uploads';
const apiBaseUrl = 'http://192.168.1.70:5000';
const apiUrlsObj = {
    aboutMeInfo: '/api/aboutMeInfo',
    auth: '/api/auth',
    headerInfo: '/api/headerInfo',
    portfolios: '/api/portfolios',
    setting: '/api/setting',
    uploads: '/api/uploads',
    allCollections: '/api/allCollections'
}

export const configs = {
    baseUploadDir,
    apiBaseUrl,
    apiUrlsObj
}