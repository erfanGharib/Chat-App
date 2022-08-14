import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faMailBulk, faMicrochip, faMicrophone, faPaperclip, faPaperPlane, faSmile, faSmileBeam, faSmileWink, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../components/avatar';
import avatar_ from '../assets/avatar.jpg';

const Main = () => {
    const sendBtnRef = React.createRef();
    const [messageBoxBtn, setMessageBoxBtn] = useState([faMicrophone,'']);
    const displaySendBtn = e => {
        if(e.target.value !== '') setMessageBoxBtn([faPaperPlane, 'send-btn']);
        else setMessageBoxBtn([faMicrophone,'']);
    }
    return (
        <main id='chat-part' className='sm:min-w-max min-w-0 w-0 overflow-hidden sm:w-3/4 bg-zinc-800'>
            <div id='main-header' className='w-full h-16 border-b border-zinc-700'>
                <div id='chat-info' className='f-center h-full w-40'>
                    <Avatar imageSrc={avatar_} size='11' />
                    <h3 className='chat-name'>Node js</h3>
                </div>
                <div>
                    {/* <label htmlFor="search-box" className='h-5'>
                        <FontAwesomeIcon icon={faSearch} className='absolute font-light text-neutral-500 mt-3 ml-4'/>
                        <input 
                            type="text" 
                            name="search-box" 
                            id="search-box" 
                            placeholder='Search'
                            className='rounded-xl  outline-none h-8 pb-1 text-md text-neutral-300 bg-transparent pl-12 placeholder:text-zinc-500 bg-neutral-700' 
                        />
                    </label> */}

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