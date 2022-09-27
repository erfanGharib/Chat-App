import React, { useContext, useState } from 'react';
import Avatar from './avatar';

const MessageListItem = props => {
    const {userName, messageText, messageMeta} = props;
    return (
        <div className='flex w-full'>
            <Avatar size='10' />
            <div className='rounded-c shadow-sm bg-lightMode_toLightC'>
                <span className='mr-2'>
                    <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fillRule="evenodd"><path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#000" filter="url(#a)"></path><path d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z" fill="#FFF" className="corner"></path></g></svg>
                </span>
                <h4>{userName}</h4>
                <p>{messageText}</p>
                <div>
                    <span>{messageMeta}</span>
                </div>
            </div>
        </div>
    );
}
export default MessageListItem;