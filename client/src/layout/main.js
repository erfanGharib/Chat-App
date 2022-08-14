import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../components/avatar';
import avatar_ from '../assets/avatar.jpg';

const Main = () => {
    return (
        <main id='chat-part' className='sm:min-w-max min-w-0 w-0 overflow-hidden sm:w-3/4 bg-zinc-800'>
            <div id='main-header' className='w-full h-16 border-b border-zinc-700'>
                <div id='chat-info' className='f-center h-full w-40'>
                    <Avatar imageSrc={avatar_} size='11' />
                    <h3 className='chat-name'>Node js</h3>
                </div>
                <div>
                    {/* <label htmlFor="search-box" className='h-5'>
                        <FontAwesomeIcon icon={faSearch} className='absolute font-light text-neutral-500 mt-3 ml-4'/>
                        <input 
                            type="text" 
                            name="search-box" 
                            id="search-box" 
                            placeholder='Search'
                            className='rounded-xl  outline-none h-8 pb-1 text-md text-neutral-300 bg-transparent pl-12 placeholder:text-zinc-500 bg-neutral-700' 
                        />
                    </label> */}

                </div>
            </div>

            <div className='w-full h-full bg-zinc-900'>

            </div>
        </main>
    );
}
export default Main;