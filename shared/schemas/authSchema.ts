import * as Yup from 'yup';
import { passwordMessage, passwordRegex } from '../regex';
import { T_KeyAsPropNameMap } from '../../shared/types/T_KeyAsPropNameMap';
import { T_Users } from '../types/T_Users';

export const authSiginSchema: T_KeyAsPropNameMap<T_Users> = {
    usr_name: Yup.string().required().max(50),
    usr_email: Yup.string().required().email(),
    usr_password: Yup.string().required().matches(passwordRegex, { message: passwordMessage }),
}
export const authLoginSchema = {
    usr_email: authSiginSchema.usr_email,
    usr_password: authSiginSchema.usr_password,
};