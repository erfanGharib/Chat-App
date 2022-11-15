import { createContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const EnterPhoneNumber = ({className}) => {
    return (
        <div className='mr-6' style={{minWidth: '320px'}}>
            <div>
                <h2 className='text-2xl'>Sign In</h2>
                <p className='text-darkMode_toLightC opacity-50'>
                    Please confirm your country code <br />
                    and enter your phone number.
                </p>
            </div>

            <div className='border-c border relative rounded-c my-3'>
                <select className='appearance-none p-3 w-full h-full z-10 relative bg-transparent text-lightMode_toDarkC font-light'>
                    <option value="Country" key="Country">Country</option>
                </select>
                <FontAwesomeIcon icon={faAngleDown} className='z-0 text-lightMode_toDarkC absolute right-3 top-4' />
            </div>

            <label htmlFor='phoneNumber' className='relative rounded-c border-sky-500 border p-3 flex'>
                <span className='absolute -top-2.5 left-3 text-sky-500 bg-lightMode_toLightC text-sm px-1'>Phone number</span>
                <input id='countryCode' type="text" className='w-12 bg-transparent' />
                <span className='w-0.5 h-4 mt-1 bg-lightMode_toDarkC inline-block'></span>
                <input id='phoneNumber' type="text" className='bg-transparent pl-3' />
            </label>
        </div>
    );
}

export default EnterPhoneNumber;
