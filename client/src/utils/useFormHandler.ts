import { AxiosError, AxiosResponse } from 'axios';
import { FormEvent } from 'react';
import * as Yup from 'yup';
import { configs } from '../global/configs';
import T_ApiUrlsObj from '../types/T_ApiUrlsObj';

export type T_YupSchema = { [key: string]: Yup.StringSchema };
export type T_Send = (e: FormEvent<HTMLFormElement>, method?: 'put' | 'post') => void;
type FormElements = [string, HTMLInputElement];
type T_UseFormHandler = (args: {
    endPoint: T_ApiUrlsObj;
    validationSchema: T_YupSchema;
    onSuccess?: (response: AxiosResponse) => void;
    onFailure?: () => void;
    onSubmit?: (formData: FormData, form: FormEvent<HTMLFormElement>) => Promise<any>;
    onError?: (reason: string) => void;
}) => { send: T_Send };

const useFormHandler: T_UseFormHandler = ({
    endPoint,
    validationSchema,
    onSuccess = () => {},
    onFailure = () => {},
    onSubmit = async () => {},
    onError = () => {},
}) => {
    const expectedInputElements = ['INPUT', 'TEXTAREA', 'CHECKBOX', 'SELECT'];
    let data = new FormData();
    let form: EventTarget = null;
    
    const disableSubmitBtn = (
        disabled: boolean = true,
        btnSelector = 'button[type="submit"]'
    ) => {
        const button = (<Element>form).querySelector(btnSelector);

        if (!button)
            throw new Error(
                `useFormHandler: No submit button exist with this selector: ${btnSelector}`
            );

        if (disabled) button.setAttribute('disabled', String(true));
        else button.removeAttribute('disabled');
    };

    // if no error occurred append inputs data to FormData and return true
    const isFormValuesValid = (): boolean => {
        const inputValues: Array<Array<any>> = Object.entries(form);
        const errArray: boolean[] = [];

        inputValues.forEach(([_, element]: FormElements, index) => {
            if (!expectedInputElements.some((v) => v === element.tagName) || !element.name)
                return;

            const nextElement = element.nextElementSibling;
            const isErrElement = element.nextElementSibling?.classList.contains('err');
            const currentValidationSchema = validationSchema?.[element?.name];

            try {
                currentValidationSchema?.validateSync(element?.value);
                errArray[index] = false;
                data.append(
                    element?.name,
                    element?.files?.length >= 1
                        ? element?.files[0]
                        : element?.value.trim()
                );

                if (isErrElement) nextElement.innerHTML = '';
            } 
            catch (err) {
                errArray[index] = true;
                                
                disableSubmitBtn(false);
                onError(`${element?.name}: ${err?.errors?.[0]}`);

                if (isErrElement) nextElement.innerHTML = err?.errors?.[0];
            }
        });

        const isValid = errArray.every((v) => v === false);

        return isValid;
    };

    const send: T_Send = async (e, method = 'post') => {
        e.preventDefault();
        
        form = e.target;
        data = new FormData();

        disableSubmitBtn();

        if(e.type !== 'submit') return;

        const _isFormValuesValid = isFormValuesValid();
        
        if(!(await onSubmit(data, e))) {
            disableSubmitBtn(false);
        }
        if (_isFormValuesValid) {
            await configs.axios?.[method](
                configs.apiBaseUrl + endPoint, 
                data,
                { withCredentials: true }
            )
                .then((res) => onSuccess(res))
                .catch((err: AxiosError) => {
                    // add response error to last p.err element in form
                    //@ts-ignore
                    const allErr = form.querySelectorAll('p.err');
                    allErr[allErr.length-1].innerHTML = 
                        err.response?.data?.['title'] ?? err.message;
                    
                    console.log(err);
                    
                    onFailure();
                    disableSubmitBtn(false);
                });
        } 
        else disableSubmitBtn(false);
    }

    return { send };
}

export default useFormHandler;