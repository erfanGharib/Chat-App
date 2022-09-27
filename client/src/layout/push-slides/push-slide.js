import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { PushSlideContext } from '../chat-sidebar';

const PushSlide = props => {
    const {set_DISPLAY_STATUS, DISPLAY_STATUS} = useContext(PushSlideContext);
    console.log(DISPLAY_STATUS);

    return (
        <div id='push-slide' className={`p-3 dark:bg-darkMode_lightC bg-lightMode_toLightC z-10 min-w-320 w-80 h-full transition-transform duration-300 ${DISPLAY_STATUS ? '-translate-x-1/2' : 'translate-x-1/2'} transform`}>
            <button id='back-btn' className='default-btn' onClick={() => set_DISPLAY_STATUS(false)}>
                <FontAwesomeIcon icon={faArrowLeft} size={'lg'} />
            </button>
            {props.children}
        </div>
    );
}
export default PushSlide;