import { setUserMsg } from '@/stores/appStore/reducers/_userMsg';
import { T_AppStoreReducers } from '@/types/T_AppStoreReducers';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition, faMicrophone, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmojiPicker from 'emoji-picker-react';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
// import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

const MessageBox = ({ socket }: { socket: Socket }) => {
    const { data: msg } = useSelector((state: T_AppStoreReducers) => state.$_userMsg);
    const dispatch = useDispatch();
    const DisplayEmojiPicker: { current: boolean } = useRef(false);
    const messageInputRef: { current: HTMLInputElement } = useRef();
    const sendBtnRef: { current: HTMLButtonElement } = useRef();
    const 
        [messageBoxBtn, setMessageBoxBtn]: 
        [
            [IconDefinition, string], 
            React.Dispatch<React.SetStateAction<[IconDefinition, string]>> 
        ]
        = useState([faMicrophone, '']);

    const displaySendBtn = e => {
        if (e.target.value !== '') setMessageBoxBtn([faPaperPlane, 'send-btn']);
        else setMessageBoxBtn([faMicrophone, '']);
    }
    const displayEmojiPicker = () => {
        DisplayEmojiPicker.current = !DisplayEmojiPicker.current;
    }
    const getTime = () => {
        let date = new Date;
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    // send message to broad cast
    const sendMsg = () => {
        socket.emit('createdMsg', msg);
        
        let msgCp = [...msg];
        msgCp.push({ 
            userName: 'erfan', 
            messageText: messageInputRef.current.value,
            messageMeta: getTime(),
            chatType: 2,
        });
        
        dispatch(setUserMsg(msgCp));
        console.log(msg);
    }

    return (
        <div id='massage-box' className='h-16 w-full max-w-xl mx-auto px-4 f-center-between'>
            <div className='dark:bg-darkMode_lightC shadow-lg h-full bg-lightMode_toLightC w-11/12 mr-2 px-4 rounded-t-c f-center-between'>
                <div id='emoji-picker' className='relative'>
                    <span 
                        className='relative' 
                        onClick={displayEmojiPicker} 
                        onMouseEnter={displayEmojiPicker} 
                        onMouseLeave={displayEmojiPicker}
                    >
                        <FontAwesomeIcon icon={faFaceSmile} className='text-xl icon-c w-5' />
                    </span>
                    <span
                        style={{ transform: 'translateX(-35px)' }}
                        className='absolute transition-all duration-200 opacity-0 invisible bottom-12'
                    >
                        {
                            !DisplayEmojiPicker ?
                            <></> :
                            <></>
                            // <EmojiPicker
                            //     height='340px'
                            //     // theme="auto"
                            //     lazyLoadEmojis
                            //     previewConfig={{ showPreview: false }}
                            //     // onEmojiClick={emoji => text += <img src={emoji.getImageUrl()} />} 
                            // />
                        }
                    </span>
                </div>
                {/* <div
                    type='text'
                    onInput={displaySendBtn}
                    ref={messageInputRef}
                    className='rtl ml-3 mb-0.5 text-neutral-500 dark:text-neutral-300 bg-transparent outline-none w-11/12'
                >
                    {text}
                    <span id='placeholder' className='text-neutral-400 dark:text-neutral-600'>Your Massage..</span>
                </div> */}
                <input
                    type="text"
                    // onInput={displaySendBtn}
                    ref={messageInputRef}
                    placeholder='Your Massage..'
                    className='rtl focus:!shadow-none h-full ml-3 text-neutral-500 dark:text-neutral-300 bg-transparent outline-none w-11/12'
                />
                <span>
                    <FontAwesomeIcon icon={faPaperclip} size='lg' className='text-xl icon-c w-5' />
                </span>
            </div>

            <span
                id='send-btn'
                onClick={sendMsg}
                ref={sendBtnRef}
                className={`${messageBoxBtn[1]} f-center w-14 h-full shadow-lg rounded-t-c py-3.5 dark:bg-darkMode_lightC bg-lightMode_toLightC`}
            >
                <FontAwesomeIcon icon={messageBoxBtn[0]} className='text-xl icon-c w-4.5' />
            </span>
        </div>
    );
}
export default MessageBox;