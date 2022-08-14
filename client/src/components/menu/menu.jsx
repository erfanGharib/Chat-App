import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBug, faUser, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import MenuItems from './menu-items';

const Menu = () => {
    const menuItemsRef = React.createRef();
    const openMenu = () => {
        const menuItemsCls = menuItemsRef.current.classList;
        menuItemsCls.toggle('flex');
        menuItemsCls.toggle('hidden');
    }
    const nightMode = () => {
        console.log('Night mode OK');
    }
    return (
        <div id='menu' className='h-full relative'>
            <button onClick={openMenu} className='py-3 px-3 mr-4 hover:bg-neutral-700 hover:bg-opacity-40 rounded-c'>
                <FontAwesomeIcon icon={faBars} size='lg' className='icon-c' />
            </button>
            <ul ref={menuItemsRef} className='bg-neutral-700 absolute w-52 h-40 top-14 justify-between hidden flex-col shadow-lg p-2 rounded-c'>
                <MenuItems text_='Contacts' icon={faUser} />
                <MenuItems text_='Setting' icon={faGear} />
                <MenuItems text_='Night Mode' icon={faMoon} checkBox={{is: true, func: nightMode}} />
                <MenuItems text_='Report Bug' icon={faBug} />
            </ul>
        </div>
    );
}
export default Menu;