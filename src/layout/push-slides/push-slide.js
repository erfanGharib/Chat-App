import React, { useContext } from 'react';
import { AppData } from '../../pages/chatApp';
import Setting from './setting';
import Contacts from './contacts';
import BackBtn from '../../components/backBtn';

const PushSlide = props => {
    const {pushSlideData, setPushSlideData} = useContext(AppData);

    let pushSlideContent;
    if(pushSlideData.status) pushSlideContent = <Contacts />;
    else if(pushSlideData.status === false) pushSlideContent = <Setting />;
    
    return (
        <div id='push-slide' className={`dark:bg-darkMode_lightC bg-lightMode_toLightC z-10 w-1/2 min-w-320 h-full`}>
            <div id='profileSidebar-header' className='side-bar-header bg-lightMode_lightC'>
                <BackBtn func={() => setPushSlideData({ translate: '-translate-x-0' })} /> 
                <h1 className='text-xl text-darkMode_toLightC dark:text-lightMode_toDarkC mr-auto mb-1 ml-3'>Setting</h1>
            </div>
            {pushSlideContent}
        </div>
    );
}
export default PushSlide;