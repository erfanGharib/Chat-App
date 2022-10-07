import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from './menuItems';

const Menu = ({data}) => {
    // render all menuItems and menuIcon
    const menuItemsRef = React.createRef();
    const openMenu = () => menuItemsRef.current.classList.toggle('display-menu');
    const dynamicStyles = `${data.transformOrigin} ${data.color} ${data.right}`;

    return (
        <div id='menu' className='relative'>
            <button onClick={openMenu} className='default-btn mr-4'>
                <FontAwesomeIcon icon={data.ico} size='lg' className='icon-c' />
            </button>
            <ul ref={menuItemsRef} className={`${dynamicStyles} z-20 bg-lightMode_toLightC dark:bg-darkMode_lightC opacity-0 scale-90 transition-transform duration-200 invisible absolute w-52 top-14 justify-between flex-col border dark:border-darkMode_toLightC shadow-2xl p-2 rounded-c`}>
                {data.items.map(v => 
                    <MenuItems data={v} key={v.text_} />
                )}
            </ul>
        </div>
    );
}
export default Menu;