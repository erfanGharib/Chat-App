import { useSelector } from "react-redux";
import lightAvatar from '../assets/avatar.svg';
import darkAvatar from '../assets/dark-avatar.svg';

const Avatar = props => {
    // if chat or user has no profile replace it with default one
    const { IS_DARK_MODE } = useSelector(state => state.$_theme);
    const { 
        imageSrc = IS_DARK_MODE ? darkAvatar : lightAvatar, 
        rounded = 'rounded-full',
        margin = 'mr-3', 
        size, 
    } = props;

    /*bg-gradient-to-t from-emerald-600 to-emerald-300*/
    // imageSrc === undefined ?
    // <span className='w-full h-full text-xl -top-0.5 text-white f-center absolute'>e</span> :

    return (
        <div className={`avatar f-center relative ${margin} max-h-${size} min-w-${size} max-w-${size} overflow-hidden h-${size} ${rounded}`}>
            {<img src={imageSrc} alt="avatar" className='h-full max-w-none' />}
        </div>
    );
}
export default Avatar; 