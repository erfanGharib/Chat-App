import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBug, faGear, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import PushSlide from './push-slides/pushSlide';
import Menu from '../components/menu/menu';
import SearchBox from '../components/searchBox';
import { useDispatch, useSelector } from 'react-redux';
import { showPushSlide } from '../stores/appStore/reducers/_pushSlideData';
import { changeTheme } from '../stores/appStore/reducers/_theme';
import { showModal } from '../stores/appStore/reducers/_reportBugModal';
import ChatItem from '../components/chatItem';
import { setUserChat } from '../stores/appStore/reducers/_userChat';
import { useEffect } from 'react';
import { T_AppStoreReducers } from '@/types/T_AppStoreReducers';
import { T_UserChat } from '@/types/T_UserChat';

const ChatSideBar = () => {
    const dispatch = useDispatch();
    const { IS_DARK_MODE } = useSelector((state: T_AppStoreReducers) => state.$_theme);

    useEffect(() => {
        const htmlClass = document.documentElement.classList;
        if (IS_DARK_MODE) htmlClass.add('dark');
        else htmlClass.remove('dark');
    }, [IS_DARK_MODE]);

    const { data: userChat, firstState } = useSelector((state: T_AppStoreReducers) => state.$_userChat);

    return (
        <div id='chat-sidebar' className='border-r overflow-hidden side-bar relative'>
            <div className='w-full h-full relative px-3'>
                <div id='chat-sidebar-header' className='side-bar-header'>
                    <Menu
                        items={[
                            { 
                                label: {
                                    text: 'Contacts', 
                                    ico: faUser,
                                }, 
                                fn: () => dispatch(showPushSlide(true)) 
                            },
                            { 
                                label: {
                                    text: 'Setting', 
                                    ico: faGear,
                                }, 
                                fn: () => dispatch(showPushSlide(false)) 
                            },
                            { 
                                label: {
                                    text: 'Dark Mode', 
                                    ico: faMoon,
                                }, 
                                checkBox: true,
                                fn: () => dispatch(changeTheme()), 
                            },
                            { 
                                label: {
                                    text: 'Report Bug', 
                                    ico: faBug,
                                }, 
                                fn: () => dispatch(showModal()) 
                            },
                        ]}
                        labelIco={faBars}
                        className='origin-top-left'
                    />
                    <SearchBox setData={setUserChat} firstState={firstState} />
                </div>

                <div id='sidebar-chats'>
                    {
                        userChat.map((chat: T_UserChat) => {
                            return <ChatItem {...chat} key={chat.id} />
                        })
                    }
                </div>

                <span
                    id='new-message-btn'
                    className='pr-5 py-4 rounded-full f-center overflow-hidden hover:w-44 transition-all sm:h-12 h-14 sm:w-12 w-14 primary-btn absolute bottom-5 right-5'
                >
                    <div className='f-center right-3 transition-all absolute'>
                        <span className='text-white mr-5 min-w-max'>New Message</span>
                        <FontAwesomeIcon icon={faPen} size='xl' className='w-5 sm:w-4 mr-1 text-white' />
                    </div>
                </span>
            </div>

            <PushSlide />
        </div>
    );
}
export default ChatSideBar;