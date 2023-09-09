import Image from "next/image";
import { useSelector } from "react-redux";
import lightAvatar from '../assets/avatar.svg';
import darkAvatar from '../assets/dark-avatar.svg';
import { T_AppStoreReducers } from "@/types/T_AppStoreReducers";

interface T_AvatarProps {
    imageSrc?: string, 
    size: 10 | 11 | 12 | 14 | 'full',
    className?: string
}

const Avatar = (props: T_AvatarProps) => {
    // if chat or user has no profile replace it with default one
    const { IS_DARK_MODE } = useSelector((state: T_AppStoreReducers) => state.$_theme);
    const { 
        imageSrc = IS_DARK_MODE ? darkAvatar : lightAvatar, 
        size, 
        className = 'mr-3 rounded-full'
    } = props;

    /*bg-gradient-to-t from-emerald-600 to-emerald-300*/
    // imageSrc === undefined ?
    // <span className='w-full h-full text-xl -top-0.5 text-white f-center absolute'>e</span> :

    return (
        <div className={`${className} avatar f-center relative max-h-${size} min-w-${size} max-w-${size} overflow-hidden h-${size}`}>
            <Image src={imageSrc} width='100' height='100' alt="avatar" className='h-full w-full' />
        </div>
    );
}
export default Avatar; 