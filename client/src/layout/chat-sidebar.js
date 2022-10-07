import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBug, faGear, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import ChatItem from '../components/chat-item';
import PushSlide from './push-slides/push-slide';
import Setting from './push-slides/setting';
import Menu from '../components/menu/menu';
import ChatSidbarSearchBox from '../components/chatSidebarSearchBox';
import Contacts from './push-slides/contacts';
import { AppData } from '../App';

const PushSlideContext = React.createContext();

const ChatSideBar = () => {
    const [IS_SETTING_PUSHSLIDE, set_IS_SETTING_PUSHSLIDE] = useState(true);
    const {set_PROFILE_DISPLAY_STATUS, set_REPORT_BUG_MODAL_DISPLAY_STATUS} = useContext(AppData);

    const darkMode = e => {
        document.querySelector('html').classList.toggle('dark');
        const toggleInput = e.target.lastChild.querySelector('input');

        if(toggleInput !== null && !toggleInput.checked) toggleInput.checked = true;
        else toggleInput.checked = false;
    }
    const displayPushSlide = IS_SETTING_PUSHSLIDE => {
        set_PROFILE_DISPLAY_STATUS(true)
        set_IS_SETTING_PUSHSLIDE(IS_SETTING_PUSHSLIDE);
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
                                {text_: 'Contacts', ico: faUser, func: () => displayPushSlide(false)},
                                {text_: 'Setting', ico: faGear, func: () => displayPushSlide(true)},
                                {text_: 'Dark Mode', ico: faMoon, func: darkMode, checkBox: true},
                                {text_: 'Report Bug', ico: faBug, func: () => set_REPORT_BUG_MODAL_DISPLAY_STATUS(true)},
                            ]
                        }} 
                    />
                    <ChatSidbarSearchBox />
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

            <PushSlide>
                {IS_SETTING_PUSHSLIDE ? <Setting /> : <Contacts />}
            </PushSlide>
        </div>
    );
}
export default ChatSideBar;
export { PushSlideContext };