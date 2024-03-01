import Setting from './setting';
import Contacts from './contacts';
import { useSelector } from 'react-redux';
import { T_AppStoreReducers } from '@/types/T_AppStoreReducers';

const PushSlide = () => {
    /** 
     * setting and contacts part are in @PushSlide component
     * to display it, i used "transform_translate" on css
     * pushSlideContent define that wich slide must be displayed
     * this state controled by redux
    */
    const { status, translate } = useSelector((state: T_AppStoreReducers) => state.$_pushSlideData);

    let pushSlideContent: JSX.Element;
    if (status) pushSlideContent = <Contacts />;
    else if (status === false) pushSlideContent = <Setting />;

    return (
        <div 
            id='push-slide' 
            className={`${translate} duration-300 transform transition-transform absolute top-0 z-20 dark:bg-darkMode_lightC bg-lightMode_toLightC w-full h-full`}
        >
            {pushSlideContent}
        </div>
    );
}
export default PushSlide;