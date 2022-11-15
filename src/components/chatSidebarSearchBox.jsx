import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ChatSidebarSearchBox = () => {
    const [SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS] = useState(false);

    return (
        <>
            <div 
                className={`
                    ${SEARCH_BOX_STATUS ? 'flex' : 'hidden'} 
                    absolute z-10 w-full h-full dark:bg-darkMode_lightC bg-lightMode_toLightC top-0 right-0
                `}
            >
            </div>

            <label htmlFor="search-box" className='h-11 w-full z-20 relative'>
                <FontAwesomeIcon 
                    icon={SEARCH_BOX_STATUS ? faArrowLeft : faSearch} 
                    className='absolute top-3 left-4 font-light icon-c' 
                />
                <input
                    type="text"
                    name="search-box"
                    id="search-box"
                    placeholder='Search'
                    onInput={() => set_SEARCH_BOX_STATUS(true)}
                    className='rounded-c w-full h-11 outline-none pb-1 text-md text-neutral-300 bg-lightMode_lightC pl-12 placeholder:text-zinc-500 dark:bg-darkMode_toLightC'
                />
            </label>
        </>
    );
}
export default ChatSidebarSearchBox;