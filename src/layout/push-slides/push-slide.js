import Setting from './setting';
import Contacts from './contacts';
import { useSelector } from 'react-redux';

const PushSlide = props => {
    const { status, translate } = useSelector(state => state.$_pushSlideData);

    let pushSlideContent;
    if(status) pushSlideContent = <Contacts />;
    else if(status === false) pushSlideContent = <Setting />;
    
    return (
        <div id='push-slide' className={`${translate} duration-300 transform transition-transform absolute top-0 z-20 dark:bg-darkMode_lightC bg-lightMode_toLightC w-full h-full`}>
            {pushSlideContent}
        </div>
    );
}
export default PushSlide;