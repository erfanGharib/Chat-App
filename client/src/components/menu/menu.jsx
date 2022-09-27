import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from './menu-items';

const Menu = ({data}) => {
    // render all menuItems and menu
    const menuItemsRef = React.createRef();
    const openMenu = () => menuItemsRef.current.classList.toggle('display-menu');
    return (
        <div id='menu' className='relative'>
            <button onClick={openMenu} className='default-btn mr-4'>
                <FontAwesomeIcon icon={data.ico} size='lg' className='icon-c' />
            </button>
            <ul ref={menuItemsRef} className={`bg-lightMode_lightC dark:bg-darkMode_toLightC opacity-0 scale-90 ${data.color} ${data.right} transition-transform duration-200 invisible absolute w-52 ${data.transformOrigin} top-12 justify-between flex-col shadow-md backdrop-blur-xl p-2 rounded-c`}>
                {data.items.map(v => 
                    <MenuItems data={v} key={v.text_} />
                )}
            </ul>
        </div>
    );
}
export default Menu;