import { setErrMsg } from '@/stores/signinStore/reducers/_errMsg';
import { setForm } from '@/stores/signinStore/reducers/_form';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Btn from '../btn';
import Input from './input';
import { T_SigninStoreReducers } from '@/types/T_SigninStoreReducers';

const EnterCode = () => {
    const codeConfirmRef = useRef();
    const router         = useRouter();
    const dispatch       = useDispatch();
    const { codeErr }    = useSelector((state: T_SigninStoreReducers) => state.$_errMsg);
    const { email }      = useSelector((state: T_SigninStoreReducers) => state.$_userEmail);
    // const [IS_LOADING, set_IS_LOADING]  = useState(false);

    const backToEmailForm = () => {
        dispatch(setForm());
    }

    const sendData = event => {
        event.preventDefault();
        const { value: code } = codeConfirmRef.current;

        // if no error occurred -> send confirm code
        // here i used redux to show error to user
        if (code.length === 5) {
            axios.post('/api/signin/confirmCode', { email, code })
                .then(() => {
                    // set_IS_LOADING(true);
                    dispatch(setErrMsg(['codeErr', '']));
                    router.replace('/app');
                })
                .catch(() => dispatch(setErrMsg(['codeErr', 'Invalid code'])));
        }
        else dispatch(setErrMsg(['codeErr', 'Invalid code']));
    }

    return (
        <>
            <div>
                <button
                    className='hover:underline text-sm text-primary mb-2'
                    onClick={backToEmailForm}
                >
                    <FontAwesomeIcon icon={faAngleLeft} size='sm' className='!text-primary mr-1 icon-c' />
                    Edit email
                </button>
                <h2 className='text-2xl'>Code</h2>
                <p className='text-darkMode_toLightC opacity-50'>
                    Please confirm code we have sent to <br /> {email}
                </p>
            </div>

            <form>
                <Input
                    inputRef={codeConfirmRef}
                    id='confirmCode'
                    type='tel'
                    label='Code'
                    autoFocus
                />
                <p className='errMsg'>{codeErr}</p>

                <Btn
                    className='w-full mt-3 primary-btn'
                    onBtnClick={sendData}
                    text='Confirm'
                    // IS_LOADING={IS_LOADING}
                />
                {/* <a href="intent://chromecast.com/#Intent;scheme=comgooglecast;package=com.google.android.apps.chromecast.app;end">go to email</a> */}
            </form>
        </>
    );
}

export default EnterCode;
