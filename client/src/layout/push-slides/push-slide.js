import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AppData } from '../../pages/chatApp';

const PushSlide = props => {
    const {PUSH_SLIDE_DISPLAY_STATUS, set_PUSH_SLIDE_DISPLAY_STATUS} = useContext(AppData);

    return (
        <div id='push-slide' className={`dark:bg-darkMode_lightC bg-lightMode_toLightC z-10 min-w-320 w-80 h-full transition-transform duration-300 ${PUSH_SLIDE_DISPLAY_STATUS ? '-translate-x-1/2' : 'translate-x-1/2'} transform`}>
            <div id='profileSidebar-header' className='side-bar-header bg-lightMode_lightC'>
                <button id='back-btn' className='default-btn mr-2' onClick={() => set_PUSH_SLIDE_DISPLAY_STATUS(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} size={'lg'} />
                </button>
                <h1 className='text-xl text-darkMode_toLightC dark:text-lightMode_toDarkC mr-auto mb-1'>Setting</h1>
            </div>
            {props.children}
        </div>
    );
}
export default PushSlide;