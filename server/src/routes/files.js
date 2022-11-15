const { readdirSync } = require('fs');
const { Router } = require('express');
const filesRouter = Router();
const __basedir = require('../../../index');

// const getFileList = (dirName) => {
//     let files = [];
//     const items = readdirSync(dirName, { withFileTypes: true });

//     for (const item of items) {
//         if (item.isDirectory()) {
//             files = [...files, ...getFileList(`${dirName}/${item.name}`)];
//         } else {
//             files.push(`${dirName}/${item.name}`);
//         }
//     }
//     return files;
// };

// getFileList('uploads').forEach(file => {
//     console.log(file);
//     filesRouter.get(`/${file}`, (req, res) => {
//         res.sendFile(`${__basedir}/server/${file}`);
//     });
// });

module.exports = filesRouter;