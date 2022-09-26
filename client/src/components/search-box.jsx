import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    return (
        <label htmlFor="search-box" className='h-11 w-full'>
            <FontAwesomeIcon icon={faSearch} className='absolute font-light icon-c mt-3 ml-4' />
            <input
                type="text"
                name="search-box"
                id="search-box"
                placeholder='Search'
                className='rounded-c w-full outline-none pb-1 text-md text-neutral-300 h-full bg-transparent pl-12 placeholder:text-zinc-500 bg-neutral-700'
            />
        </label>
    );
}
export default SearchBox;