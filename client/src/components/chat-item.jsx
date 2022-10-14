import React from 'react';
import Avatar from './avatar';

const ChatItem = props => {
    const {IS_GROUP_CHAT} = props;
    return (
        <div className='chat-item w-full p-2 rounded-c flex hover:bg-lightMode_lightC hover cursor-pointer'>
            <Avatar size='14' />
            <div id='info' style={{width:'calc(100% - 70px)'}}>
                <div id='title' className='f-center-between'>
                    <h3 className='chat-name'>node js</h3>
                    <div id='last-message-time' className='text-xs text-neutral-500'>03:20 PM</div>
                </div>
                <div id='subtitle' className='w-full f-center-between'>
                    <p className='last-message text-ellipsis overflow-hidden whitespace-nowrap h-6 '>
                        {IS_GROUP_CHAT ? <span className='sender-name font-medium text-darkMode_toLightC dark:text-neutral-200 opacity-80'>erfan: </span> : ''}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.
                    </p>
                    <div className='rounded-full bg-opacity-50 bg-neutral-500 text-sm text-white py-0.5 px-2 w-auto'>14</div>
                </div>
            </div>
        </div>
    );
}
export default ChatItem;