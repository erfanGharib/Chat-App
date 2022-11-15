const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'erfan.gh.work@gmail.com',
        pass: 'cxoblxhwznpfgrym',
    }
});
const sendMail = ({ targetEmail = 'erfan.gh.work@gmail.com', req }) => {
    const [senderEmail, subject, text] = req.body;
    const mailOption = {
        from: 'Chat App <noreply.erfan.gh.work@gmail.com>',
        replyTo: 'noreply.erfan.gh.work@gmail.com',
        to: targetEmail,
        subject: 'Report Bug',
        html: (`
            <center style="width: 100%;height: 100%;">
                <div style="margin: 0 30px; width: 70%; border-radius: 10px; padding: 20px 40px; border: 1px solid #dcdcdc;text-align:left;">
                    <h1 style="font-size: 20pt; font-weight: bolder;">${subject}</h1>
                    <p style="font-size:13pt;opacity: .6;">${text}</p><br>
                    <img 
                        style="width:100%; margin-bottom: 10px;" 
                        src='https://fps.cdnpk.net/landings-paid/23022022/backgrounds/img-product-1.webp'
                    >
                    <a 
                        href="${req.hostname}/api/reportbug/bugfixed/${req.params.bugCode}"
                        target="_blank"
                        style="text-decoration: none;font-size: 12pt; padding: 10px 20px; background: #24d68c; width: 120px; height: 35px; color: #095c39;"
                    >
                        Bug Fixed
                    </a>
                    <p style="opacity: .5;">Sender Email: ${senderEmail}</p>
                </div>
            <center>
        `),
    };

    transporter.sendMail(mailOption, err => {
        if (err) console.log(err);
    });
}
module.exports = { sendMail }