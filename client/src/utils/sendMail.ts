const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'erfan.gh.work@gmail.com',
        pass: process.env.EMAIL_PASS,
    }
});

const sendMail = ({
    targetEmail, 
    subject, 
    html
}: {
    targetEmail?: string, 
    subject: string, 
    html: string
}) => {
    const mailOption = {
        from: 'Chat App <noreply.erfan.gh.work@gmail.com>',
        replyTo: 'noreply.erfan.gh.work@gmail.com',
        to: targetEmail,
        subject,
        html: (`
            <center style="width: 100%;height: 100%;">
                <div style="margin: 0 30px; width: 70%; border-radius: 10px; padding: 30px; border: 1px solid #dcdcdc;text-align:left;">
                    <h1 style="font-size: 20pt; margin: 0; font-weight: bolder;">Confrim code</h1>
                    <!-- <p style="font-size:13pt;opacity: .6;">${'text'}</p><br> -->
                    ${html}
                    <img 
                        style="width:100%; border-radius: 10px; "
                        src="https://fps.cdnpk.net/landings-paid/23022022/backgrounds/img-product-1.webp"
                    >
                </div>
            <center>
        `),
    };

    transporter.sendMail(mailOption, (err, info) => {
        if (err) console.log(err);
        else console.log("Message sent: %s", info.response);
    });
}

export default sendMail;