import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBug, faGear, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import ChatItem from '../components/chat-item';
import PushSlide from './push-slides/push-slide';
import Setting from './push-slides/setting';
import Menu from '../components/menu/menu';
import SearchBox from '../components/search-box';

const PushSlideContext = React.createContext();

const ChatSideBar = () => {
    const [DISPLAY_STATUS, set_DISPLAY_STATUS] = useState(false);
    const nightMode = () => {
        console.log('Night mode OK');
    }
    const displayPushSlide = () => {
        set_DISPLAY_STATUS(true)
        console.log('push slide');
    };

    return (
        <div id='chat-sidebar' className='border-r f-center overflow-hidden side-bar'>
            <div className='min-w-320 w-80 h-full transform translate-x-1/2'>
                <div id='chat-sidebar-header' className='side-bar-header'>
                    <Menu 
                        data={{
                            ico: faBars, 
                            transformOrigin: 'origin-top-left',
                            items: [
                                {text_: 'Contacts', ico: faUser, func: () => displayPushSlide('contacts')},
                                {text_: 'Setting', ico: faGear, func: displayPushSlide},
                                {text_: 'Night Mode', ico: faMoon, func: nightMode, checkBox: true},
                                {text_: 'Report Bug', ico: faBug},
                            ]
                        }} 
                    />
                    <SearchBox />
                </div>

                <div id='sidebar-messages' className='px-3'>
                    <ChatItem IS_GROUP_CHAT />
                    <ChatItem IS_GROUP_CHAT={false} />
                    <ChatItem IS_GROUP_CHAT />
                </div>

                <button id='new-message-btn' className='pr-4 py-3 rounded-full f-center overflow-hidden hover:w-40 transition-all h-10 w-10 primary-btn absolute bottom-5 right-5'>
                    <div className='f-center right-3 transition-all absolute'>
                        <span className='text-white mr-3.5 min-w-max'>New Message</span>
                        <FontAwesomeIcon icon={faPen} className='text-white' />
                    </div>
                </button>
            </div>

            <PushSlideContext.Provider value={{set_DISPLAY_STATUS, DISPLAY_STATUS}}>
                <PushSlide>
                    <Setting />
                </PushSlide>
            </PushSlideContext.Provider>
        </div>
    );
}
export default ChatSideBar;
export { PushSlideContext };