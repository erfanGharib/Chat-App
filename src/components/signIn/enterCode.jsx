import { createContext, useState } from 'react';

const EnterCode = ({phoneNumber, className}) => {
    return (
        <div style={{maxWidth: '320px'}}>
            <div>
                <h2 className='text-2xl'>Code</h2>
                <p className='text-darkMode_toLightC opacity-50'>
                    Please confirm code we have sent to <br/> {phoneNumber}
                </p>
            </div>

            <label id='confirmCode' className='relative gap-x-4 mt-3 flex'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </label>
        </div>
    );
}

export default EnterCode;
