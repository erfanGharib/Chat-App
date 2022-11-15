const { Router } = require('express');
const router = Router();
const { reportBug, bugfixed } = require('../routes/reportBug');
const bodyParser = require('body-parser');
const fileUpload = require('../routes/fileUpload');

router
    .post('/upload', bodyParser.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }), fileUpload)
    // .get('/file', getFilesList)
    // .get('/file/:name', download)
    .post('/reportbug', reportBug)
    .get('/reportbug/bugfixed/:id', bugfixed)

module.exports = router;