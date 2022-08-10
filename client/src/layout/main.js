import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../logo.svg';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main id='chat-part' className='sm:min-w-max min-w-0 w-0 overflow-hidden sm:w-3/4 bg-red'>
            <div id='sidebar-header'>
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <label htmlFor="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" name="search-box" id="search-box" />
                </label>
            </div>
        </main>
    );
}
export default Main;