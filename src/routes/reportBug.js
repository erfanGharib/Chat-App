const { sendMail } = require('../services/sendmail');

const reportBug = (req, res) => {
    // Router.post('/reportbug', upload.single('uploaded_file'), (req, res) => {
        console.log(req.file, req.body);
        // const [senderEmail, subject, text] = req.body;
        // sendMail({
        //     html: (`
        //         <h2 line-height: .02rem">${subject}</h2>
        //         <p style="font-size:13pt;line-height: .01rem;">${text}</p><br>
        //         <p>${senderEmail}</p>
        //         <img src="">
        //     `),
        //     attachments: [{
        //         fileName: subject,
        //         streamSource: fs.createReadStream(req.file.image.path)
        //     }]
        // });
        res.send('Email sent');
    // });
}

module.exports = reportBug;