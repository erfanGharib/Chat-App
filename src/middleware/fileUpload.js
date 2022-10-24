const multer = require('multer'); 
const util = require('util')
// const maxSize = 2 * 1080 * 1080;

// const uploadFile = (filePath, fileName) => {
    // use diskStorage engine for saving file
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `../uploads/email`);
        },
        filename: function (req, file, cb) {
            console.log(file.originalname);
            cb(null, file.originalname);
        }
    });

    const uploadFile_ = multer({ 
        storage,
        // limits: { fileSize: maxSize }
    }).single('file');

    const uploadFileMiddleware = util.promisify(uploadFile_);
// }
module.exports = uploadFileMiddleware;