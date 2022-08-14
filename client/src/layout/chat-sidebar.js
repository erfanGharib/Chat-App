import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faPen } from '@fortawesome/free-solid-svg-icons';
import ChatItem from '../components/chat-item';
import Menu from '../components/menu/menu';

const ChatSideBar = () => {
    return (
        <div id='chat-sidebar' className='border-r side-bar'>
            <div id='chat-sidebar-header' className='side-bar-header'>
                <Menu />
                <label htmlFor="search-box" className='h-11 w-full'>
                    <FontAwesomeIcon icon={faSearch} className='absolute font-light icon-c mt-3 ml-4'/>
                    <input 
                        type="text" 
                        name="search-box" 
                        id="search-box" 
                        placeholder='Search'
                        className='rounded-c w-full outline-none pb-1 text-md text-neutral-300 h-full bg-transparent pl-12 placeholder:text-zinc-500 bg-neutral-700' 
                    />
                </label>
            </div>

            <div id='sidebar-messages' className='px-3'>
                <ChatItem IS_GROUP_CHAT />
                <ChatItem IS_GROUP_CHAT={false} />
                <ChatItem IS_GROUP_CHAT />
            </div>

            <button id='new-message-btn' className='pr-4 py-3 rounded-full f-center overflow-hidden hover:w-40 transition-all h-10 w-10 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 absolute bottom-5 right-5'>
                <div className='f-center right-3 transition-all absolute'>
                    <span className='text-white mr-3.5 min-w-max'>New Message</span>
                    <FontAwesomeIcon icon={faPen} className='text-white' />
                </div>
            </button>
        </div>
    );
}
export default ChatSideBar;