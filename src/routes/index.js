const { Router } = require('express');
const router = Router();
const { upload, getFilesList, download } = require('../controller/file.controller');
const reportBug = require('../routes/reportBug');

router
    .post('/upload', upload)
    .get('/file', getFilesList)
    .get('/file/:name', download)
    .post('/reportbug', reportBug);

//     app.use(router);
// }

module.exports = router;