import { NextApiRequest, NextApiResponse } from 'next';
import sendMail from '../../utils/sendMail';

const reportBug = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        sendMail({
            html:(`
                <a 
                    href="${req.url}/api/reportbug/bugfixed/"
                    target="_blank"
                    style="text-decoration: none;font-size: 12pt; padding: 10px 20px; background: #24d68c; width: 120px; height: 35px; color: #095c39;"
                >
                    Bug Fixed
                </a>
                <p style="opacity: .5;">Sender Email: ${req.body.senderEmail}</p>
            `),
            subject: ''
        });
        res.send('200');
    }
    catch (err) {
        res.status(500).send(err)
    }
}
// const bugfixed = (req, res) => {
//     res.send(req.body)
// }
// module.exports = { reportBug, bugfixed };
export default reportBug;