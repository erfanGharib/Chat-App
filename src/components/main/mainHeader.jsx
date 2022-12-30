import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsisVertical, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../avatar';
import Menu from '../menu/menu';
import MainSearchBox from './mainSearchBox';
import BackBtn from '../backBtn';
import { useDispatch } from 'react-redux';
import { screenWidth } from '../../pages/chatApp';
import { hideUserChat } from '../../store/reducers/_userChat';
import { showProfileSidebar } from '../../store/reducers/_profileSidebar';
import { hideMain } from '../../store/reducers/_main';

const MainHeader = () => {
    const dispatch = useDispatch();
    
    return (
        <div id='main-header' className='f-center relative dark:bg-darkMode_lightC bg-lightMode_toLightC w-full min-h-16 h-16 sm:border-b border-c f-center-between'>
            {/* <MainSearchBox /> */}
            {
                screenWidth ?
                <BackBtn func={() => dispatch(hideMain())} /> :
                <></>
            }

            <div
                onClick={() => dispatch(showProfileSidebar())}
                id='chat-info'
                className='f-start sm:pl-3 pl-2 h-full w-full mr-2 hover:bg-lightMode_lightC cursor-pointer hover'
            >
                <Avatar size='11' />
                <h3 className='chat-name'>Node js</h3>
            </div>
            <div className='w-20 h-full f-center mr-3'>
                <span
                    className='default-btn'
                    // onClick={() => set_SEARCH_BOX_STATUS(true)}
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
                            { text_: 'Mute', ico: faBell },
                            { text_: 'Delete Chat', ico: faTrash, color: 'text-rose-400' },
                        ]
                    }}
                />
            </div>
        </div>
    );
}
export default MainHeader;