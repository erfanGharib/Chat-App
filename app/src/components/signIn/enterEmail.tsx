import { setErrMsg } from '@/stores/signinStore/reducers/_errMsg';
import { setForm } from '@/stores/signinStore/reducers/_form';
import { setUserEmail } from '@/stores/signinStore/reducers/_userEmail';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Btn from '../btn';
import Input from './input';
import { T_SigninStoreReducers } from '@/types/T_SigninStoreReducers';

const EnterEmail = () => {
    const dispatch = useDispatch();
    const { nameErr, emailErr } = useSelector((state: T_SigninStoreReducers) => state.$_errMsg);
    const [IS_LOADING, set_IS_LOADING]  = useState(false);
    const emailInpRef = useRef(),
          nameInpRef  = useRef();

    const checkEmailValidation = () => {
        const emailInpValue = emailInpRef.current.value;
        return (
            emailInpValue
                .toString()
                .toLowerCase()
                .trim()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ) !== null
        )
    }

    const checkNameValidation = () => {
        const nameInpValue  = nameInpRef.current.value;
        return (
            nameInpValue.trim() !== ''
        )
    }

    const sendData = event => {
        event.preventDefault();
        const emailInpValue = emailInpRef.current.value,
              nameInpValue  = nameInpRef.current.value;

        /** 
         * dispatch(setErrMsg([ #InputName, #ErrorMsg ])) 
         * handling error messages with redux 
         * goal: to have dynamic and clean code on redux reducer
         * filePath: "@/stores/signinStore/reducers/_errMsg.js"
        */
        dispatch(setErrMsg([
            'emailErr',
            checkEmailValidation() ? '' : 'Invalid Email'
        ]));
        dispatch(setErrMsg([
            'nameErr',
            checkNameValidation() ? '' : 'No Name Entered'
        ]));

        if (checkEmailValidation() && checkNameValidation()) {
            set_IS_LOADING(true);
            /**
             * if no error occurred -> send user data to backend via api
             * change form EnterEmail -> EnterCode
            **/
            dispatch(setForm());

            /**
             * pass email to redux
             * goal: to access email in EnterCode component
             **/
            dispatch(setUserEmail(emailInpValue));

            axios.post(
                '/api/signin/confirmEmail',
                { 
                    email: emailInpValue, 
                    name:  nameInpValue 
                }
            )
        }
    }

    return (
        <>
            <div>
                <h2 className='text-2xl'>Sign In</h2>
                <p className='text-darkMode_toLightC opacity-50'>
                    Please enter your Name & Email.
                </p>
            </div>

            <form>
                <Input autoFocus label='Name' inputRef={nameInpRef} />
                <p className='errMsg'>{nameErr}</p>

                <Input label='Email' inputRef={emailInpRef} />
                <p className='errMsg'>{emailErr}</p>

                <Btn
                    className='w-full mt-3 primary-btn'
                    onBtnClick={sendData}
                    text='Next'
                    // IS_LOADING={IS_LOADING}
                />
            </form>
        </>
    );
}

export default EnterEmail;