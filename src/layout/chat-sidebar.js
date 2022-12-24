import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBug, faGear, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import ChatItem from '../components/chat-item';
import PushSlide from './push-slides/push-slide';
import Menu from '../components/menu/menu';
import ChatSidbarSearchBox from '../components/chatSidebarSearchBox';
import { AppData } from '../pages/chatApp';

const PushSlideContext = React.createContext();
const ChatSideBar = () => {
    const {pushSlideData, setPushSlideData, set_REPORT_BUG_MODAL_DISPLAY_STATUS} = useContext(AppData);

    const darkMode = e => {
        document.querySelector('html').classList.toggle('dark');
        const toggleInput = e.target.lastChild.querySelector('input');

        if(toggleInput !== null && !toggleInput.checked) toggleInput.checked = true;
        else toggleInput.checked = false;
    }
    const displayPushSlide = (status) => {
        setPushSlideData({translate: '-translate-x-1/2', status});
    };
    
    return (
        <div id='chat-sidebar' className={`border-r overflow-hidden side-bar min-w-200 sm:min-w-0`}>
            <div className={`min-w-640 h-full w-full f-start transition-transform duration-300 transform ${pushSlideData.translate}`}>
                <div className='w-1/2 h-full relative px-3'>
                    <div id='chat-sidebar-header' className='side-bar-header'>
                        <Menu
                            data={{
                                ico: faBars, 
                                transformOrigin: 'origin-top-left',
                                items: [
                                    {text_: 'Contacts', ico: faUser, func: () => displayPushSlide(true)},
                                    {text_: 'Setting', ico: faGear, func: () => displayPushSlide(false)},
                                    {text_: 'Dark Mode', ico: faMoon, func: darkMode, checkBox: true},
                                    {text_: 'Report Bug', ico: faBug, func: () => set_REPORT_BUG_MODAL_DISPLAY_STATUS(true)},
                                ]
                            }} 
                        />
                        <ChatSidbarSearchBox />
                    </div>

                    <div id='sidebar-messages'>
                        <ChatItem IS_GROUP_CHAT />
                        <ChatItem IS_GROUP_CHAT={false} />
                        <ChatItem IS_GROUP_CHAT />
                    </div>

                    <span id='new-message-btn' className='pr-4 py-3 rounded-full f-center overflow-hidden hover:w-40 transition-all h-10 w-10 primary-btn absolute bottom-5 right-5'>
                        <div className='f-center right-3 transition-all absolute'>
                            <span className='text-white mr-3.5 min-w-max'>New Message</span>
                            <FontAwesomeIcon icon={faPen} className='text-white' />
                        </div>
                    </span>
                </div>

                <PushSlide />
            </div>
        </div>
    );
}
export default ChatSideBar;
export { PushSlideContext };