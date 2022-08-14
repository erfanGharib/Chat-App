import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItems = props => {
    const {text_, icon} = props;
    return (
        <li role='button' className='menu-item text-neutral-300 z-10 py-1.5 px-3 rounded-c hover:bg-neutral-200 hover:bg-opacity-10'>
            <FontAwesomeIcon icon={icon} className='text-neutral-300 mr-2' />
            {text_}
        </li>
    );
}
export default MenuItems;