import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { env } from "process";
import { sharedConfigs } from "../../../shared/sharedConfigs.js";
import { createHttpError } from "../utils/createHttpError.js";

const isTokenValid = (token: string): boolean => {
    if(!token) return false;
    const trimmedToken = token.replace(sharedConfigs.BEARER_KEYWORD + ' ', '');
    try {
        return token.startsWith(sharedConfigs.BEARER_KEYWORD) && !!jwt.verify(trimmedToken, env.JWT_PRIVATE_KEY);
    } catch(err) {
        return false;
    }
}
export async function validateToken (
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization;

    if(isTokenValid(token)) return res.status(403).send(createHttpError(403))
    next();
}