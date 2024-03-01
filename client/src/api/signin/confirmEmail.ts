import { sendMail } from '@/middleware/sendMail';
const MongoClient = require('mongodb').MongoClient;

const generateCode = () => {
    let code = '';
    const rndNum = () => Math.floor(Math.random() * 10);
    for (let index = 0; index < 5; index++) {
        code += rndNum();
    }
    return code;
}
const confirmEmail = (req, res) => {
    const code = generateCode();
    const { email, name } = req.body;

    // 1. create confirm document on db
    MongoClient.connect(process.env.DBURL, (err, db) => {
        if (err) throw err;

        const dbo = db.db(process.env.DB_NAME);
        const obj = { 
            profile: {
                email, 
                name 
            },
            code
        };

        dbo
            .collection('users')
            .find({})
            .toArray((err, result) => {
                if (err) throw err;

                // check validation of confirmCode
                else if (result.some(v => v.email === email)) {
                    dbo
                        .collection('users')
                        .updateOne({ email }, { $set: obj }, err => {
                            if (err) throw err;
                            console.log('user doc updated!');
                            // db.close();
                        });
                }

                else {
                    dbo
                        .collection('users')
                        .insertOne(obj, err => {
                            if (err) throw err;
                            console.log('user doc inserted!');
                            // db.close();
                        });
                }

                db.close();
            });
    })

    sendMail(
        req.body.email,
        'ChatApp',
        `<h1 style="
            font-size: 18pt;
            font-weight: 200;
            width: fit-content;
            border-radius: 10px;
            padding: 10px 20px;
            margin-top: 5px !important;
            border: 1px solid #dddddd;
        ">${code}</h1>`
    );

    return res.status(200).send();
}

export default confirmEmail;