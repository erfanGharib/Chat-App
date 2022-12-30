import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBug, faGear, faMoon, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import PushSlide from './push-slides/push-slide';
import Menu from '../components/menu/menu';
import SearchBox from '../components/searchBox';
import { useDispatch, useSelector } from 'react-redux';
import { showPushSlide } from '../store/reducers/_pushSlideData';
import { changeTheme } from '../store/reducers/_theme';
import { showModal } from '../store/reducers/_reportBugModal';
import ChatItem from '../components/chat-item';
import { setUserChat } from '../store/reducers/_userChat';

export let avatarImg;
const ChatSideBar = () => {
    const dispatch = useDispatch();

    const { IS_DARK_MODE } = useSelector(state => state.$_theme);
    const htmlClass = document.documentElement.classList;
    if (IS_DARK_MODE) htmlClass.add('dark');
    else htmlClass.remove('dark');

    const { data: userChat, firstState } = useSelector(state => state.$_userChat);

    return (
        <div id='chat-sidebar' className='border-r overflow-hidden side-bar relative'>
            <div className='w-full h-full relative px-3'>
                <div id='chat-sidebar-header' className='side-bar-header'>
                    <Menu
                        data={{
                            ico: faBars,
                            transformOrigin: 'origin-top-left',
                            items: [
                                { text_: 'Contacts', ico: faUser, func: () => dispatch(showPushSlide(true)) },
                                { text_: 'Setting', ico: faGear, func: () => dispatch(showPushSlide(false)) },
                                { text_: 'Dark Mode', ico: faMoon, func: () => dispatch(changeTheme()), checkBox: true },
                                { text_: 'Report Bug', ico: faBug, func: () => dispatch(showModal()) },
                            ]
                        }}
                    />
                    <SearchBox setData={setUserChat} firstState={firstState} />
                </div>

                <div id='sidebar-chats'>
                    {
                        userChat.map((chat) => {
                            return <ChatItem data={chat} key={chat.id} />
                        })
                    }
                </div>

                <span id='new-message-btn' className='pr-5 py-4 rounded-full f-center overflow-hidden hover:w-40 transition-all h-12 w-12 primary-btn absolute bottom-5 right-5'>
                    <div className='f-center right-3 transition-all absolute'>
                        <span className='text-white mr-4 min-w-max'>New Message</span>
                        <FontAwesomeIcon icon={faPen} size='sm' className='text-white mr-1' />
                    </div>
                </span>
            </div>

            <PushSlide />
        </div>
    );
}
export default ChatSideBar;