import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MainSearchBox = ({ state }) => {
    const {SEARCH_BOX_STATUS, set_SEARCH_BOX_STATUS} = state;
    // console.log(SEARCH_BOX_STATUS);
    return (
        <label
            htmlFor='search-box'
            className={`${SEARCH_BOX_STATUS ? 'f-center' : 'hidden'} h-full w-full z-10 absolute p-3 bg-lightMode_toLightC dark:bg-darkMode_lightC`}
        >
            <button 
                onClick={() => set_SEARCH_BOX_STATUS(false)} 
                className='absolute left-3 default-btn cursor-pointer'
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='font-light icon-c'
                />
            </button>
            <input
                type="text"
                name="search-box"
                id="search-box"
                placeholder='Search'
                // onInput={() => set_STATUS(true)}
                className='rounded-c w-full h-11 outline-none pb-1 text-md text-darkMode_toLightC !bg-transparent pl-12 placeholder:text-lightMode_toDarkC'
            />
        </label>
    );
}
export default MainSearchBox;