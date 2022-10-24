const nodemailer = require('nodemailer');
const sendMail = ({ targetEmail = 'erfan.gh.work@gmail.com', html, attachments = [{}] }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'erfan.gh.work@gmail.com',
            pass: 'cxoblxhwznpfgrym',
        }
    });

    const mailOption = {
        from: 'Chat App <noreply.erfan.gh.work@gmail.com>',
        replyTo: 'noreply.erfan.gh.work@gmail.com',
        to: targetEmail,
        subject: 'Report Bug',
        html,
        attachments
    };

    transporter.sendMail(mailOption, err => {
        if (err) console.log(err);
    });
}
module.exports = { sendMail }