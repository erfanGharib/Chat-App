import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import EnterPhoneNumber from '../components/signIn/enterPhoneNumber';
import EnterCode from '../components/signIn/enterCode';
import signInBg from '../assets/signInBg.jpg';

const SignIn = () => {
    const [IS_PHONE_NUMBER_CONFIRM, set_IS_PHONE_NUMBER_CONFIRM] = useState(true);
    return (
        <>
            <div className='h-full w-full md:w-1/2 f-center bg-lightMode_toLightC'>
                <form id='signInForm' className='flex-col text-darkMode_toLightC f-center w-1/2 h-72'>
                    <div className='overflow-hidden !rounded-none'>
                        <div 
                            className={`${IS_PHONE_NUMBER_CONFIRM ? '' : '-translate-x-82'} flex items-end transform transition-transform duration-500`}
                            style={{minWidth: '700px'}}
                        >
                            <EnterPhoneNumber />
                            <EnterCode phoneNumber={'+98 939 820 3406'}/>
                        </div>
                    </div>

                    <button type='button' className='py-3 mt-3 primary-btn' onClick={() => set_IS_PHONE_NUMBER_CONFIRM(false)}>
                        Next   
                        <FontAwesomeIcon icon={faArrowRight} className='z-0 text-lightMode_lightC' />
                    </button>
                </form>
            </div>

            <div className='h-full bg-cover w-1/2 md:flex hidden' style={{backgroundImage:`url(${signInBg})`}}></div>
        </>
    );
}

export default SignIn;
