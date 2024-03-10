import express, { Response } from 'express';
import { validateReqBody } from '../middleware/validateReqBody.js';
import { authLoginSchema, authSiginSchema } from '../../../shared/schemas/authSchema.js';
import { T_Users } from '../../../shared/types/T_Users.js';
import jwt from 'jsonwebtoken';
import { env } from 'process';
import { validateToken } from '../middleware/validateToken.js';
import { dbClient } from '../global/dbClient.js';
import { usersModel } from '../models/usersModel.js';
import md5 from 'md5';
import { createHttpError } from '../utils/createHttpError.js';
import { and, eq } from 'drizzle-orm';
import { sharedConfigs } from '../../../shared/sharedConfigs.js';
const authRouter = express.Router();

const setCookie = (res: Response, body: T_Users) => {
    const COOKIE_MAX_AGE_DAYS = 10;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + COOKIE_MAX_AGE_DAYS);

    res.cookie(
        'token', 
        `${sharedConfigs.BEARER_KEYWORD} ${jwt.sign({ name: body.usr_name }, env.JWT_PRIVATE_KEY)}`,
        { 
            expires: expirationDate,
            maxAge: COOKIE_MAX_AGE_DAYS * (24 * 60 * 60),
            domain: '192.168.1.70',
            path: '/'
        }
    )
}

authRouter.post(
    '/login', 
    validateReqBody.bind(authLoginSchema), 
    validateToken,
    async ({ body }: { body: T_Users }, res) => {
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
            setCookie(res, body);
            return res.json('user logged in successfully');
        }
        
        res.status(404).send(createHttpError(404, { title: 'No user found with this data combination' }));
    }
);

authRouter.post(
    '/signin', 
    validateReqBody.bind(authSiginSchema),
    validateToken,
    async ({ body }: { body: T_Users }, res) => {
        const user = (
            await dbClient
            .insert(usersModel)
            .values({ ...body, usr_password: md5(body.usr_password) })
        );
        
        if(user.length > 0) return res.status(409).send(createHttpError(409));
        setCookie(res, body);
        res.json('user signed in successfully');
    }
);

export default authRouter;