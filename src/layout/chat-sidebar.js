import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBug, faGear, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import ChatItem from '../components/chat-item';
import PushSlide from './push-slides/push-slide';
import Menu from '../components/menu/menu';
import SearchBox from '../components/searchBox';
import { AppData } from '../pages/chatApp';

const ChatSideBar = () => {
    const {
        pushSlideData, setPushSlideData,
        set_REPORT_BUG_MODAL_DISPLAY_STATUS,
    } = useContext(AppData);
    const [userChats, setUserChats] = useState([
        {
            id: 0,
            title: 'Navid',
            profileImg: 'https://img.freepik.com/free-photo/_23-2149945830.jpg?size=240&ext=jpg',
            IS_PRIVATE_CHAT: true,
            newMessagesNumber: 10,
            lastMessage: {
                time: '03:20 PM',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
            }
        },
        {
            id: 1,
            title: 'Number 1 Models',
            profileImg: 'https://img.freepik.com/free-photo/_52683-102236.jpg?size=240&ext=jpg',
            IS_PRIVATE_CHAT: false,
            newMessagesNumber: 2,
            lastMessage: {
                time: '03:20 PM',
                sender: 'erfan',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
            }
        },
        {
            id: 2,
            title: 'Ali',
            profileImg: 'https://img.freepik.com/free-photo/_23-2149079751.jpg?size=240&ext=jpg',
            IS_PRIVATE_CHAT: true,
            newMessagesNumber: 14,
            lastMessage: {
                time: '03:20 PM',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
            }
        },
    ]);

    const darkMode = e => {
        document.querySelector('html').classList.toggle('dark');
        const toggleInput = e.target.lastChild.querySelector('input');

        if (toggleInput !== null && !toggleInput.checked) toggleInput.checked = true;
        else toggleInput.checked = false;
    }
    const displayPushSlide = (status) => {
        setPushSlideData({ translate: '-translate-x-1/2', status });
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
                                    { text_: 'Contacts', ico: faUser, func: () => displayPushSlide(true) },
                                    { text_: 'Setting', ico: faGear, func: () => displayPushSlide(false) },
                                    { text_: 'Dark Mode', ico: faMoon, func: darkMode, checkBox: true },
                                    { text_: 'Report Bug', ico: faBug, func: () => set_REPORT_BUG_MODAL_DISPLAY_STATUS(true) },
                                ]
                            }}
                        />
                        <SearchBox
                            userChats={userChats} 
                            setUserChats={setUserChats} 
                        />
                    </div>

                    <div id='sidebar-messages'>
                        {
                            userChats.map((chat) => {
                                return <ChatItem data={chat} key={chat.id} />
                            })
                        }
                    </div>

                    <span id='new-message-btn' className='pr-5 py-4 rounded-full f-center overflow-hidden hover:w-40 transition-all h-12 w-12 primary-btn absolute bottom-5 right-5'>
                        <div className='f-center right-3 transition-all absolute'>
                            <span className='text-white mr-4 min-w-max'>New Message</span>
                            <FontAwesomeIcon icon={faPen} size='md' className='text-white mr-1' />
                        </div>
                    </span>
                </div>

                <PushSlide />
            </div>
        </div>
    );
}
export default ChatSideBar;