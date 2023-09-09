import { MutableRefObject, createContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface T_InputProps { 
    label: string, 
    inputRef: MutableRefObject<any>, 
    id?: string, 
    type?: 'text' | 'tel', 
    autoFocus?: boolean 
}
const Input = (
    { label, inputRef, id = null, type = 'text', autoFocus = false }:
    T_InputProps
) => {
    return (
        <label htmlFor={label} className='relative mt-2 flex w-full'>
            {/* <span className='absolute transform translate-x-3 translate-y-3 text-lightMode_toDarkC bg-lightMode_toLightC text-md px-1'>
                {label}
            </span> */}
            <input 
                autoFocus={autoFocus}
                ref={inputRef}
                placeholder={label} 
                type={type}
                id={label}
                // maxLength={maxLength}
                className='w-full rounded-c border-c border h-12 p-3 bg-transparent' 
            />
        </label>
    );
}

export default Input;
