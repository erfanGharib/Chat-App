import React from 'react';

const ChatItem = () => {
    return (
        <div id='chat-item' className='w-full p-2 rounded-xl flex hover:bg-neutral-700 hover:bg-opacity-50 cursor-pointer'>
            <div id='avatar' className='bg-gradient-to-t relative mr-3 min-w-14 overflow-hidden h-14 from-emerald-600 to-emerald-300 rounded-full'>
                {/* <img src="" alt="" className='w-full h-full' /> */}
                <span className='w-full h-full text-xl -top-0.5 text-white f-center absolute'>e</span>
            </div>
            <div id='info' style={{width:'calc(100% - 70px)'}}>
                <div id='title' className='f-center-between'>
                    <h3 className='text-lg font-medium text-neutral-200'>node js</h3>
                    <div id='last-message-time' className='text-xs text-neutral-500'>03:20 PM</div>
                </div>
                <div id='subtitle' className='w-full f-center-between'>
                    <p className='last-message text-ellipsis overflow-hidden whitespace-nowrap h-6 '>
                        <span className='sender-name font-medium text-neutral-200'>erfan: </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.
                    </p>
                    <div className='rounded-full bg-neutral-500 text-sm text-white py-0.5 px-2 w-auto'>14</div>
                </div>
            </div>
        </div>
    );
}
export default ChatItem;