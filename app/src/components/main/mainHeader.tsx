import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsisVertical, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../avatar';
import Menu from '../menu/menu';
import MainSearchBox from './mainSearchBox';
import BackBtn from '../backBtn';
import { useDispatch } from 'react-redux';
import { showProfileSidebar } from '../../stores/appStore/reducers/_profileSidebar';
import { hideMain } from '../../stores/appStore/reducers/_main';
import { useEffect, useRef } from 'react';

// const _showProfileSidebar = () => {
//     dispatch(showProfileSidebar());
//     // axios();
// }
const MainHeader = () => {
    const dispatch = useDispatch();
    const screenWidth: { current: boolean } = useRef();

    useEffect(() => {
        /**
         * show back btn on chatSection 
         * if user entered with mobile or tablet device
        **/
        screenWidth.current = window.screen.width <= 768;
    }, []);
    
    return (
        <div id='main-header' className='f-center relative dark:bg-darkMode_lightC bg-lightMode_toLightC w-full min-h-16 h-16 sm:border-b border-c f-center-between'>
            {/* <MainSearchBox /> */}
            {
                screenWidth.current &&
                <BackBtn func={() => dispatch(hideMain())} />
            }

            <div
                // onClick={() => dispatch(showProfileSidebar())}
                id='chat-info'
                className='f-start sm:pl-3 pl-2 h-full w-full mr-2 hover:bg-lightMode_lightC sm:cursor-pointer hover'
            >
                {/* <Avatar size={11} /> */}
                <h3 className='chat-name'>Broadcast</h3>
            </div>

            {/* <div className='w-20 h-full f-center mr-3'>
                <span
                    className='default-btn'
                    // onClick={() => set_SEARCH_BOX_STATUS(true)}
                >
                    <FontAwesomeIcon
                        icon={faSearch}
                        className='icon-c text-xl w-5'
                    />
                </span>

                <Menu
                    className="origin-top-right right-0"
                    labelIco={faEllipsisVertical}
                    items={[
                        { 
                            fn: () => console.log('mute btn'),                            
                            label: {
                                text: 'Mute', 
                                ico: faBell 
                            },
                        },
                        { 
                            fn: () => console.log('delete chat btn'),
                            label: {
                                text: 'Delete Chat', 
                                ico: faTrash
                            }, 
                            className: 'text-rose-400',
                        },
                    ]}
                />
            </div> */}
        </div>
    );
}
export default MainHeader;