const uploadFile = require('../middleware/fileUpload');
const fs = require('fs');
const uploadsDirectoryPath = `${__basedir}/uploads/`;

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);
        
        if(req.files === undefined) {
            return res.status(400).send({ message: 'Please upload a file!'});
        }
        res.send({ message: `File uploaded successfuly: ${req.file.originalname}`});
    }
    catch(err) {
        res.status(500).send({ message: `Could'nt upload the file, ${err}`});
    }
}

const getFilesList = (req, res) => {
    fs.readdir(uploadsDirectoryPath, (err, files) => {
        if(err) res.status(500).send('Unable to scan files!');
    });

    let fileInfos = files.map(file => {
        return { name: file, url: 'http://localhost:5000/' }
    });

    res.send(fileInfos);
}

const download = (req, res) => {
    const fileName = req.params.name;
    res.download(uploadsDirectoryPath + fileName, fileName, err => {
        if(err) {
            return res.status(500).send({ message: "Could'nt download the file!"});
        }
    });
}

module.exports = {
    upload,
    getFilesList,
    download
}