import { and, eq } from "drizzle-orm";
import { Response } from "express";
import jwt from 'jsonwebtoken';
import md5 from "md5";
import { env } from "process";
import { sharedConfigs } from "../../../shared/sharedConfigs";
import { T_Users } from "../../../shared/types/T_Users";
import { dbClient } from "../global/dbClient";
import { usersModel } from "../models/usersModel";
import { createHttpError } from "../utils/createHttpError";

const setCookie = (res: Response, body: T_Users) => {
    const COOKIE_MAX_AGE_DAYS = 10;
    const expirationDate = new Date();
    const daysInSeconds = COOKIE_MAX_AGE_DAYS * (24 * 60 * 60);
    const daysInMilliSeconds = daysInSeconds * 1000;
    const jwtPayload = { 
        usr_name: body.usr_name, 
        usr_id: body.usr_id 
    } as T_Users
    expirationDate.setDate(expirationDate.getDate() + COOKIE_MAX_AGE_DAYS);

    const jwtToken = jwt.sign(
        jwtPayload, 
        env.JWT_PRIVATE_KEY, 
        { expiresIn: daysInMilliSeconds }
    );

    res.cookie(
        'token', 
        `${sharedConfigs.BEARER_KEYWORD} ${jwtToken}`,
        { 
            expires: expirationDate,
            maxAge: daysInMilliSeconds,
            domain: '192.168.1.70',
            path: '/'
        }
    )
}

export const authLoginController = async ({ body }: { body: T_Users }, res) => {
    const user = (
        await dbClient
        .select()
        .from(usersModel)
        .where(and(
            eq(usersModel.usr_email, body.usr_email),
            eq(usersModel.usr_password, md5(body.usr_password)),
        ))
    );
    
    if(user.length > 0) {
        setCookie(res, user[0]);
        return res.json('user logged in successfully');
    }
    
    res.status(404).send(createHttpError(404, { title: 'No user found with this data combination' }));
}

export const authSignupController = async ({ body }: { body: T_Users }, res) => {
    try {
        await dbClient
        .insert(usersModel)
        .values({ 
            ...body, 
            usr_email: body.usr_email.toLowerCase(), 
            usr_password: md5(body.usr_password) 
        })
    } catch(err) {
        return res.status(409).send(createHttpError(409, {
            title: 'User already exist with this email'
        }));
    }

    setCookie(res, body);
    res.json('user signed in successfully');
}

// export const confirmEmailController = (req, res) => {
//     const code = generate4LengthCode();
//     const { email, name } = req.body;

//     // 1. create confirm document on db
//     MongoClient.connect(process.env.DBURL, (err, db) => {
//         if (err) throw err;

//         const dbo = db.db(process.env.DB_NAME);
//         const obj = { 
//             profile: {
//                 email, 
//                 name 
//             },
//             code
//         };

//         dbo
//             .collection('users')
//             .find({})
//             .toArray((err, result) => {
//                 if (err) throw err;

//                 // check validation of confirmCode
//                 else if (result.some(v => v.email === email)) {
//                     dbo
//                         .collection('users')
//                         .updateOne({ email }, { $set: obj }, err => {
//                             if (err) throw err;
//                             console.log('user doc updated!');
//                             // db.close();
//                         });
//                 }

//                 else {
//                     dbo
//                         .collection('users')
//                         .insertOne(obj, err => {
//                             if (err) throw err;
//                             console.log('user doc inserted!');
//                             // db.close();
//                         });
//                 }

//                 db.close();
//             });
//     })

//     sendMail({
//         targetEmail: req.body.email,
//         subject: 'ChatApp',
//         html: `<h1 style="
//             font-size: 18pt;
//             font-weight: 200;
//             width: fit-content;
//             border-radius: 10px;
//             padding: 10px 20px;
//             margin-top: 5px !important;
//             border: 1px solid #dddddd;
//         ">${code}</h1>`
//     });

//     return res.status(200).send();
// }