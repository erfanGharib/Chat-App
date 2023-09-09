import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

const SearchBox = (
    { inputPlaceholder = 'Search', firstState, setData }:
    { inputPlaceholder?: string, firstState: any, setData: ActionCreatorWithPayload<any, any> }
) => {
    const dispatch = useDispatch();

    /**
     * @issue = when user search on any part of data, 
     * data will completely replace with new one
     * and i cannot have the firstState of it
     * therefore user can't access to firstState, when search deleted
     * 
     * @solution = i put the initalState out of the slice in redux-toolkit
     * and i made two copy of it,
     * firstState that we search on - it will never change
     * data that we show to user and it will be changed
     * 
     * with this solution actually we get backup from our data
     * to access it when we want
     * 
     * redux file: './src/store/reducers/_userChat.js'
     */
    const search = (inputValue: string): void => {
        /** 
         * get second property of data object and compare it with inputValue
         * second property is the "title of chat" or "contacts userName"
         */
        const newData = firstState.filter(dataObj => {
            return Object.values(dataObj)[1]?.toLowerCase().includes(inputValue);
        });

        dispatch(setData(newData));
    }

    return (
        <>
            <label htmlFor="search-box" className='h-11 w-full ml-3 z-20 relative'>
                <FontAwesomeIcon
                    // icon={SEARCH_BOX_STATUS ? faArrowLeft : faSearch} 
                    icon={faSearch}
                    className='absolute top-3.5 left-4 font-light icon-c max-w-[15px]'
                />
                <input
                    type="text"
                    name="search-box"
                    id="search-box"
                    placeholder={inputPlaceholder}
                    onInput={({ target }: { target: any }) => search(target.value.toLowerCase())}
                    className='rounded-c w-full h-11 text-lg outline-none pb-1 text-md text-zinc-600 dark:text-neutral-300 bg-lightMode_lightC pl-12 placeholder:text-zinc-500 dark:bg-darkMode_toLightC'
                />
            </label>
        </>
    );
}
export default SearchBox;