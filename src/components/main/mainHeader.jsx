import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsisVertical, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../avatar';
import Menu from '../menu/menu'; 
import { AppData } from '../../pages/chatApp';
import MainSearchBox from './mainSearchBox';
import BackBtn from '../backBtn';

const MainHeader = () => {
    const {set_PROFILE_DISPLAY_STATUS, setCurrentChat, screenWidth } = useContext(AppData);
    const [SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS] = useState(false);
 
    return (
        <div id='main-header' className='f-center relative dark:bg-darkMode_lightC bg-lightMode_toLightC w-full min-h-16 h-16 sm:border-b border-c f-center-between'>
            <MainSearchBox state={{SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS}} />
            {screenWidth ? <BackBtn func={() => setCurrentChat({ translate: 'translate-x-full' })} /> : <></>} 

            <div onClick={() => set_PROFILE_DISPLAY_STATUS(true)} id='chat-info' className='f-start sm:pl-3 pl-2 h-full w-full mr-2 hover:bg-lightMode_lightC cursor-pointer hover'>
                <Avatar size='11' />
                <h3 className='chat-name'>Node js</h3>
            </div>
            <div className='w-20 h-full f-center mr-3'>
                <span 
                    className='default-btn'
                    onClick={() => set_SEARCH_BOX_STATUS(true)}
                >
                    <FontAwesomeIcon
                        icon={faSearch} 
                        className='icon-c text-xl' 
                    />
                </span>
                
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