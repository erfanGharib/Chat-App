const nodemailer = require('nodemailer');
const sendMail = ({targetEmail = 'erfan.gh.work@gmail.com', text, subject}) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'erfan.gh.work@gmail.com',
            pass: 'cxoblxhwznpfgrym',
        }
    });
    
    let mailOption = {
        from: 'Chat App <noreply.erfan.gh.work@gmail.com>',
        replyTo: 'noreply.erfan.gh.work@gmail.com',
        to: targetEmail,
        subject: `Report Bug: ${subject}`,
        text
    };
    
    transporter.sendMail(mailOption, err => {
        if(err) console.log(err);
    });
}
module.exports = { sendMail }