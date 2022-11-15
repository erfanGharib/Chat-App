const { sendMail } = require('../middleware/sendMail');

const reportBug = (req, res) => {
    try {
        console.log('erfan');
        setTimeout(() => {
            sendMail({ reqBody: req.body });
            res.sendStatus(200);
        }, 5000)
    }
    catch (err) {
        res.status(500).send(err)
    }
}
const bugfixed = (req, res) => {
    res.send(req.params)
}
module.exports = {reportBug, bugfixed};