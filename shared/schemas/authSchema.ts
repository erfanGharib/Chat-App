import * as Yup from 'yup';
import { T_KeyAsPropNameMap } from '../../shared/types/T_KeyAsPropNameMap';
import { passwordMessage, passwordRegex } from '../regex';
import { T_Users } from '../types/T_Users';

export const authSignupSchema: T_KeyAsPropNameMap<T_Users> = {
    usr_name: Yup.string().required().max(50),
    usr_email: Yup.string().required().email(),
    usr_password: Yup.string().required().matches(passwordRegex, { message: passwordMessage }),
}
export const authLoginSchema = {
    usr_email: authSignupSchema.usr_email,
    usr_password: authSignupSchema.usr_password,
};