const { sendMail } = require('../services/sendmail');
const Router = require('express').Router();

// Router.get('/reportbug', (req, res) => {
//     res.send('dsfad')
// })
Router.post('/reportbug', (req, res) => {
    console.log(req.body);
    res.send(req.config)
    // sendMail({
    //     subject: 'Send-File not working',
    //     senderEmail: 'hiestbandit@gmail.com',
    //     text: (`
    //         Sender Email: ${email}\n
    //         Id nisi consequat deserunt et nulla ea labore laborum nostrud aute irure adipisicing.
    //     `)
    // });
});

module.exports = Router;