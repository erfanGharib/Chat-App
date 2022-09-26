import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsisVertical, faFaceSmile, faMicrophone, faPaperclip, faPaperPlane, faRing, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../components/avatar';
import avatar_ from '../assets/avatar.jpg';
import Menu from '../components/menu/menu';

const Main = () => {
    const sendBtnRef = React.createRef();
    const [messageBoxBtn, setMessageBoxBtn] = useState([faMicrophone, '']);
    const displaySendBtn = e => {
        if (e.target.value !== '') setMessageBoxBtn([faPaperPlane, 'send-btn']);
        else setMessageBoxBtn([faMicrophone, '']);
    }
    return (
        <main id='chat-part' className='sm:min-w-max min-w-0 w-0 overflow-hidden sm:w-full bg-zinc-800'>
            <div id='main-header' className='w-full h-16 border-b border-zinc-700 f-center-between'>
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

            <div className='w-full h-full bg-zinc-900'>
                <div className='w-full h-full max-w-xl mx-auto px-4'>
                    <div style={{ height: 'calc(100% - 140px)' }} id='massage-list' className='w-full'></div>
                    <div id='massage-box' className='h-20 w-full pb-5 pt-2 f-center-between'>
                        <div className='bg-neutral-800 w-11/12 mr-2 py-3 px-4 rounded-c f-center-between'>
                            <button>
                                <FontAwesomeIcon icon={faFaceSmile} className='text-xl icon-c' />
                            </button>
                            <input
                                type='text'
                                placeholder='Your Massage..'
                                onInput={displaySendBtn}
                                className='rtl ml-3 mb-0.5 text-neutral-300 bg-transparent outline-none w-11/12 placeholder:text-neutral-600'
                            />
                            <button>
                                <FontAwesomeIcon icon={faPaperclip} className='text-xl icon-c' />
                            </button>
                        </div>

                        <button ref={sendBtnRef} className={`${messageBoxBtn[1]} w-14 rounded-c py-3.5 bg-neutral-800 transition-colors duration-300`}>
                            <FontAwesomeIcon icon={messageBoxBtn[0]} className='text-xl icon-c' />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Main;