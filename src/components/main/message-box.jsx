import React, { useState } from 'react';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import EmojiPicker from 'emoji-picker-react';
import { faPaperclip, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MessageBox = () => {
    const emojiPickerRef = React.createRef();
    const messageInputRef = React.createRef();
    const sendBtnRef = React.createRef();
    let text = '';
    const [messageBoxBtn, setMessageBoxBtn] = useState([faMicrophone, '']);

    const displaySendBtn = e => {
        if (e.target.value !== '') setMessageBoxBtn([faPaperPlane, 'send-btn']);
        else setMessageBoxBtn([faMicrophone, '']);
    }
    const displayEmojiPicker = () => {
        emojiPickerRef.current.classList.toggle('display-menu');
    }
    const hideEmojiPicker = () => {
        emojiPickerRef.current.classList.remove('display-menu');
    }

    return (
        <div id='massage-box' className='h-20 w-full max-w-xl mx-auto pb-2 px-4 f-center-between'>
            <div className='dark:bg-darkMode_lightC shadow-lg bg-lightMode_toLightC w-11/12 mr-2 py-3 px-4 rounded-c f-center-between'>
                <div id='emoji-picker' className='relative'>
                    <span className='relative' onClick={displayEmojiPicker} onMouseEnter={displayEmojiPicker} onMouseLeave={displayEmojiPicker}>
                        <FontAwesomeIcon icon={faFaceSmile} className='text-xl icon-c' />
                    </span>
                    <span
                        ref={emojiPickerRef}
                        style={{ transform: 'translateX(-35px)' }}
                        className='absolute transition-all duration-200 opacity-0 invisible bottom-12'
                    >
                        <EmojiPicker 
                            height='340px' 
                            theme='auto'
                            lazyLoadEmojis
                            previewConfig={{ showPreview: false }} 
                            // onEmojiClick={emoji => text += <img src={emoji.getImageUrl()} />} 
                        />
                    </span>
                </div>
                <div
                    type='text'
                    onInput={displaySendBtn}
                    ref={messageInputRef}
                    className='rtl ml-3 mb-0.5 text-neutral-500 dark:text-neutral-300 bg-transparent outline-none w-11/12'
                >
                    {text}
                    <span id='placeholder' className='text-neutral-400 dark:text-neutral-600'>Your Massage..</span>
                </div>
                <span>
                    <FontAwesomeIcon icon={faPaperclip} className='text-xl icon-c' />
                </span>
            </div>

            <span id='send-btn' ref={sendBtnRef} className={`${messageBoxBtn[1]} text-center w-14 shadow-lg rounded-c py-3.5 dark:bg-darkMode_lightC bg-lightMode_toLightC`}>
                <FontAwesomeIcon icon={messageBoxBtn[0]} className='text-xl icon-c' />
            </span>
        </div>
    );
}
export default MessageBox;