import React, { useContext } from 'react';
import { AppData } from '../../pages/chatApp';
import Setting from './setting';
import Contacts from './contacts';

const PushSlide = props => {
    const {pushSlideData} = useContext(AppData);

    let pushSlideContent;
    if(pushSlideData.status) pushSlideContent = <Contacts />;
    else if(pushSlideData.status === false) pushSlideContent = <Setting />;
    
    return (
        <div id='push-slide' className={`dark:bg-darkMode_lightC bg-lightMode_toLightC z-10 w-1/2 min-w-320 h-full`}>
            {pushSlideContent}
        </div>
    );
}
export default PushSlide;