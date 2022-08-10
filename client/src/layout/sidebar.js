import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faPen } from '@fortawesome/free-solid-svg-icons';
import ChatItem from '../components/chat-item';
import logo from '../logo.svg';

const SideBar = () => {
    return (
        <div id='sidebar' className='relative sm:w-2/6 text-neutral-400 bg-zinc-800 w-full sm:min-w-320 h-full'>
            <div id='sidebar-header' className='w-full p-3 bg-zinc-800 top-0 sticky flex items-center justify-between'>
                <button className='py-2 px-4 mr-4'>
                    <FontAwesomeIcon icon={faBars} size='lg' className='text-neutral-500' />
                </button>

                <label htmlFor="search-box" className='h-11 w-full'>
                    <FontAwesomeIcon icon={faSearch} className='absolute font-light text-neutral-500 mt-3 ml-4'/>
                    <input 
                        type="text" 
                        name="search-box" 
                        id="search-box" 
                        placeholder='Search'
                        className='rounded-xl w-full outline-none pb-1 text-md text-neutral-300 h-full bg-transparent pl-12 placeholder:text-zinc-500 bg-neutral-700' 
                    />
                </label>
            </div>

            <div id='sidebar-messages' className='px-3'>
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>

            <button className='px-4 py-3 rounded-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 absolute bottom-5 right-5'>
                <FontAwesomeIcon icon={faPen} className='text-white' />
            </button>
        </div>
    );
}
export default SideBar;