import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { T_MenuItem } from '../../types/menu/T_MenuItem';

const MenuItems = (
    { checkBox = false, className = '', label, fn }:
    T_MenuItem
) => {
    return (
        <label 
            onClick={fn}
            className={`${className} select-none sm:cursor-pointer menu-item text-darkMode_lightC text-sm font-medium dark:text-neutral-200 z-10 py-1.5 px-2 rounded-c hover items-center flex`}
        >
            <FontAwesomeIcon 
                icon={label.ico} 
                className={`${className} text-neutral-400 mr-3`} 
            />
            {label.text}
            {
                checkBox &&
                <label htmlFor="small-toggle" className="inline-flex relative items-center left-12 cursor-pointer">
                    <input onChange={fn} type="checkbox" id="small-toggle" className="sr-only peer" />
                    <div className="w-8 h-3 after:bottom-[-2px] dark:peer-checked:after:bg-darkMode_lightC peer-checked:after:border-sky-500 after:border-neutral-300 after:border-2 dark:bg-darkMode_lightC peer-focus:outline-none rounded-full peer bg-neutral-300 peer-checked:after:translate-x-full after:content-[''] after:absolute peer-checked:after:bg-white after:bg-neutral-100 dark:after:bg-neutral-400 after:rounded-full after:h-4 after:w-4 peer-checked:bg-sky-500"></div>
                </label>
            }
        </label>
    );
}
export default MenuItems;