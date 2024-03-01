// const MongoClient = require('mongodb').MongoClient;
const { setCookie, getCookies } = require('cookies-next');

import { T_AboutMeObj } from '@/types/schemas/T_AboutMeObj';
import ManageDBDoc from '@/utils/ManageDBDoc';
import parseForm from '@/utils/parseForm';
import { urlQueryToObj } from '@/utils/urlQueryToObj';
import { NextApiRequest, NextApiResponse } from 'next';

// const handler_aboutMeInfo = async (req: NextApiRequest, res: NextApiResponse) => {
//     const manageDBDoc = new ManageDBDoc('aboutMeInfo');
//     const existingData = await manageDBDoc.findMany({});
//     let { select = '', where = '' } = req.query;

//     switch (req.method) {
//         case 'POST': {
//             const reqBody = await parseForm({
//                 req,
//                 res,
//                 maxFileSize: 1 * 1_000 * 20_000,
//                 uploadDir: '/erfangharib',
//                 expectedMimeTypes: [
//                     'video/mp4', 'image/gif', 'image/jpeg', 'image/png', 'image/jpg'
//                 ],
//             });

//             if(existingData?.length > 0) await manageDBDoc.deleteOne({ id: 'aboutMeInfo' })
//             await manageDBDoc.insertOne(reqBody);
//             res.send('portfolio inserted successfuly');
//             break;
//         }

//         case 'GET':
//             res.send(
//                 (await (manageDBDoc.findMany<T_AboutMeObj>(
//                     urlQueryToObj(where) || {}, 
//                     urlQueryToObj(select)
//                 )))?.[0]
//             );
//             break;

//         default:
//             res.status(405).send('')
//             break;
//     }
//     manageDBDoc.closeDB();
// }

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default handler_aboutMeInfo;

const generateToken = async (user, req, res) => {
    // set _id of document as cookie 
    setCookie('userToken', String(user[0]._id), { req, res, maxAge: 60 * 60 * 168 });
    getCookies({ req, res });
}
const handler_confirmCode = (req, res) => {
    const { email, code } = req.body;

    // MongoClient.connect(process.env.DBURL, (err, db) => {
    //     if (err) return res.status(401).send(err);
    //     const dbo = db.db(process.env.DB_NAME);

    //     dbo
    //         .collection('users')
    //         .find({})
    //         .toArray((err, result) => {
    //             if (err) throw err;

    //             // check validation of confirmCode
    //             else if (result.some(v => v.email === email && v.code === code)) {
    //                 generateToken(result.filter(v => v.email === email), req, res);

    //                 const obj = { $set: { code: '' } };
    //                 console.log(email, code);
    //                 dbo
    //                     .collection('users')
    //                     .updateOne({ email }, obj, err => {
    //                         if (err) throw err;
    //                         console.log('user doc inserted!');
    //                     });

    //                 res.send('cookie ok!');
    //             }
    //             else res.status(401).send('err');
    //             db.close();
    //         });
    // });
}

export default handler_confirmCode;