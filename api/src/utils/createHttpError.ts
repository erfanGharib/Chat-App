import { getReasonPhrase } from "http-status-codes";
import { T_HttpErrorObj } from '../../../shared/types/T_HttpErrorObj.js'

export const createHttpError = (
    statusCode: number, 
    options?: { message?: string, errors?: any }
): T_HttpErrorObj => {
    const { message, errors } = options ?? {};
    const error = {
        title: message ?? getReasonPhrase(statusCode),
        statusCode,
        errors
    }
    return error;
}