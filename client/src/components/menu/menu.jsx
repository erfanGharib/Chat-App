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
            <ul ref={menuItemsRef} className={`opacity-0 scale-90 ${data.color} ${data.right} transition-all duration-200 invisible bg-neutral-700 absolute w-52 ${data.transformOrigin} top-12 justify-between flex-col shadow-lg p-2 rounded-c`}>
                {data.items.map(v => 
                    <MenuItems data={v} key={v.text_} />
                )}
            </ul>
        </div>
    );
}
export default Menu;