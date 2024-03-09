import { NextFunction, Request, Response } from "express";
import setting from "../global/setting.js";
import jwt from 'jsonwebtoken';
import { env } from "process";
import { dbClient } from "../global/dbClient.js";
import { usersModel } from "../models/usersModel.js";
import { eq } from "drizzle-orm";
import { T_Users } from "../../../shared/types/T_Users.js";
import { createHttpError } from "../utils/createHttpError.js";

const isTokenValid = (token: string): boolean => {
    if(!token) return false;
    const trimmedToken = token.replace(setting.BEARER_KEYWORD + ' ', '');
    try {
        return token.startsWith(setting.BEARER_KEYWORD) && !!jwt.verify(trimmedToken, env.JWT_PRIVATE_KEY);
    } catch(err) {
        return false;
    }
}
export async function checkUserLoginStatus (
    this: 'isLoggedIn' | 'isSignedIn',
    req: Request,
    res: Response,
    next: NextFunction
) {
    const body = req.body as T_Users;
    const token = req.headers.authorization;

    if(isTokenValid(token)) return res.status(403).send(createHttpError(403))

    const user = (
        await dbClient()
        .select()
        .from(usersModel)
        .where(eq(usersModel.usr_email, body.usr_email))
    );

    switch(this) {
        case 'isLoggedIn':
            if(user.length > 0) return next();
            res.status(404).send(createHttpError(404));
            break;

        case 'isSignedIn':
            if(user.length > 0) return res.status(409).send(createHttpError(409));
            next();
            break;
    }
}