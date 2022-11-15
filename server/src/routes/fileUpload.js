const fs = require('fs');

// upload file with saparate api
const fileUpload = (req, res) => {
    try {
        fs.writeFile(
            `${__basedir}/uploads/email/image.jpeg`,
            req.body,
            err => { if (err) throw err }
        );
        res.sendStatus(200);
    }
    catch (err) {
        res.send(err);
    }
}

module.exports = fileUpload;