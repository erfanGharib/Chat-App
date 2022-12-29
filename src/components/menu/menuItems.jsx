import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItems = ({data}) => {
    // render chatSidbar menuItems
    // get item data from 'data' param
    const {text_, func, ico, color, checkBox, key} = data;

    return (
        <label 
            onClick={func} 
            key={key}
            className={`${color} select-none cursor-pointer menu-item text-darkMode_lightC text-sm font-medium dark:text-neutral-200 z-10 py-1.5 px-2 rounded-c hover items-center flex`}
        >
            <FontAwesomeIcon icon={ico} className={`${color} text-neutral-400 mr-3`} />
            {text_}
            {checkBox ? 
                <label htmlFor="small-toggle" className="inline-flex relative items-center left-12 cursor-pointer">
                    <input onChange={func} type="checkbox" id="small-toggle" className="sr-only peer" />
                    <div className="w-8 h-3 after:bottom-[-2px] dark:peer-checked:after:bg-darkMode_lightC peer-checked:after:border-sky-500 after:border-neutral-300 after:border-2 dark:bg-darkMode_lightC peer-focus:outline-none rounded-full peer bg-neutral-300 peer-checked:after:translate-x-full after:content-[''] after:absolute peer-checked:after:bg-white after:bg-neutral-100 dark:after:bg-neutral-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-500"></div>
                </label> : ''
            }
        </label>
    );
}
export default MenuItems;