import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItems = props => {
    const {text_, icon, checkBox} = props;
    return (
        <li role='button' className='menu-item text-neutral-200 z-10 py-1.5 px-3 rounded-c hover:bg-neutral-200 hover:bg-opacity-10'>
            <FontAwesomeIcon icon={icon} className='text-neutral-400 mr-3' />
            {text_}
            {checkBox !== undefined ? 
                <label htmlFor="small-toggle" className="inline-flex relative items-center top-1 left-6 cursor-pointer">
                    <input onChange={checkBox.func} type="checkbox" id="small-toggle" className="sr-only peer" />
                    <div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] peer-checked:after:bg-white after:bg-neutral-400 after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-sky-500"></div>
                </label> :
                ''
            }
            
        </li>
    );
}
export default MenuItems;