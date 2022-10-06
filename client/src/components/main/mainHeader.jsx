import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsisVertical, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../avatar';
import avatar_ from '../../assets/avatar.jpg';
import Menu from '../menu/menu'; 
import { AppData } from '../../App';
import MainSearchBox from './mainSearchBox';

const MainHeader = () => {
    const {set_PROFILE_DISPLAY_STATUS} = useContext(AppData);
    const [SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS] = useState(false);
 
    return (
        <div id='main-header' className='f-center relative dark:bg-darkMode_lightC bg-lightMode_toLightC w-full h-16 border-b dark:border-darkMode_toLightC border-lightMode_darkC f-center-between'>
            <MainSearchBox state={{SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS}} />

            <div onClick={() => set_PROFILE_DISPLAY_STATUS(true)} id='chat-info' className='f-start pl-4 h-full w-full mr-4 hover:bg-lightMode_lightC cursor-pointer dark-hover'>
                <Avatar imageSrc={avatar_} size='11' />
                <h3 className='chat-name'>Node js</h3>
            </div>
            <div className='w-20 h-full f-center mr-4'>
                <button 
                    className='default-btn'
                    onClick={() => set_SEARCH_BOX_STATUS(true)}
                >
                    <FontAwesomeIcon
                        icon={faSearch} 
                        className='icon-c text-xl' 
                    />
                </button>
                
                <Menu 
                    data={{
                        ico: faEllipsisVertical,
                        transformOrigin: 'origin-top-right',
                        right: 'right-0',
                        items: [
                            {text_: 'Mute', ico: faBell},
                            {text_: 'Delete Chat', ico: faTrash, color: 'text-rose-400'},
                        ]
                    }} 
                />
            </div>
        </div>
    );
}
export default MainHeader;