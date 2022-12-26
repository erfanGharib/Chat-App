import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AppData } from '../pages/chatApp';

const SearchBox = props => {
    const { inputPlaceholder = 'Search', userChats, setUserChats, prevUserData } = props;
    // const { setUserData, userData } = useContext(AppData);
    
    // const [SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS] = useState(false);
    const search = inputValue => {
        const newData = userChats.filter(({ title }) => {
            return title.toLowerCase().includes(inputValue);
        });

        // full copy of userChats
        let newUserChats = JSON.parse(JSON.stringify(userChats));
        newUserChats = newData;
        setUserChats(newUserChats);
        console.log(prevUserData);
    }

    return (
        <>
            {/* <div 
                className={`
                    ${SEARCH_BOX_STATUS ? 'flex' : 'hidden'} 
                    absolute z-10 w-full h-full dark:bg-darkMode_lightC bg-lightMode_toLightC top-0 right-0
                `}
            >
            </div> */}

            <label htmlFor="search-box" className='h-11 w-full ml-3 z-20 relative'>
                <FontAwesomeIcon
                    // icon={SEARCH_BOX_STATUS ? faArrowLeft : faSearch} 
                    icon={faSearch}
                    className='absolute top-3.5 left-4 font-light icon-c'
                />
                <input
                    type="text"
                    name="search-box"
                    id="search-box"
                    placeholder={inputPlaceholder}
                    onInput={({ target }) => search(target.value.toLowerCase())}
                    className='rounded-c w-full h-11 text-lg outline-none pb-1 text-md text-zinc-600 dark:text-neutral-300 bg-lightMode_lightC pl-12 placeholder:text-zinc-500 dark:bg-darkMode_toLightC'
                />
            </label>
        </>
    );
}
export default SearchBox;