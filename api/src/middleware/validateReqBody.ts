import { NextFunction, Request, Response } from "express";
import * as Yup from 'yup';
import { createHttpError } from "../utils/createHttpError.js";

type T_ThisArg = { [key: string]: Yup.StringSchema };
type T_ValidateReqBody = (this: T_ThisArg, req: Request, res: Response, next: NextFunction) => void;

export const validateReqBody: T_ValidateReqBody = function (this, req, res, next) {
    if(!this) 
        throw Error('no property bound to `this` in `validateReqBody`');

    Yup
    .object(this)
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(({ errors }) => {
        res.status(400).send(createHttpError(400, { errors }))
    })
}