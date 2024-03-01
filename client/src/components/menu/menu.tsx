import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from './menuItems';
import { useRef } from 'react';
import { T_MenuProps } from '../../types/menu/T_MenuProps';

const Menu = (
    { items, labelIco, className }: 
    T_MenuProps
) => {
    const menuItemsRef: any = useRef();
    const openMenu = () => menuItemsRef.current.classList.toggle('display-menu');

    return (
        <div id='menu' className='relative'>
            <span onClick={openMenu} className='default-btn relative'>
                <FontAwesomeIcon 
                    icon={labelIco} 
                    size='lg' 
                    className='relative icon-c w-4.5 max-h-[20px]' 
                />
            </span>
            <ul 
                ref={menuItemsRef} 
                className={`${className} z-20 bg-lightMode_toLightC dark:bg-darkMode_lightC opacity-0 scale-90 invisible transform transition-opacity duration-200  absolute w-52 top-14 justify-between flex-col border dark:border-darkMode_toLightC shadow-2xl p-2 rounded-c`}
            >
                {items.map((v, index) => 
                    <MenuItems {...v} key={index} />
                )}
            </ul>
        </div>
    );
}
export default Menu;