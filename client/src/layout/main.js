import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsisVertical, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../components/avatar';
import avatar_ from '../assets/avatar.jpg';
import Menu from '../components/menu/menu';
import bgImage from '../assets/bg.jpg';
import MessageListItem from '../components/message-list-item';
import MessageBox from '../components/message-box';

const Main = () => {
    return (
        <main id='chat-part' className='sm:min-w-max min-w-0 w-0 overflow-hidden sm:w-full dark:bg-darkMode_lightC bg-lightMode_toLightC'>
            <div id='main-header' className='w-full h-16 border-b dark:border-darkMode_toLightC border-lightMode_darkC f-center-between'>
                <div id='chat-info' className='f-center h-full w-40 m-0'>
                    <Avatar imageSrc={avatar_} size='11' />
                    <h3 className='chat-name'>Node js</h3>
                </div>
                <div className='w-20 h-full f-center mr-4'>
                    <button className='default-btn'>
                        <FontAwesomeIcon icon={faSearch} className='icon-c text-xl' />
                    </button>
                    
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

            <div style={{boxShadow: '0 0 10px #22222222 inset', background: `url(${bgImage}) right`}} className='w-full h-full dark:bg-darkMode_lightC bg-lightMode_toLightC'>
                <div className='w-full h-full max-w-xl mx-auto px-4'>
                    <div style={{ height: 'calc(100% - 140px)' }} id='massage-list' className='w-full overflow-y-auto flex flex-col justify-end'>
                        <MessageListItem />
                    </div>
                    <MessageBox />
                </div>
            </div>
        </main>
    );
}
export default Main;