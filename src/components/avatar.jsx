import React from 'react';
import avatarImg from '../assets/avatar.svg';

const Avatar = props => {
    // if chat or user has no profile replace it with default one
    const { imageSrc = avatarImg, size } = props;
    /*bg-gradient-to-t from-emerald-600 to-emerald-300*/
    // imageSrc === undefined ?
        // <span className='w-full h-full text-xl -top-0.5 text-white f-center absolute'>e</span> :

    return (
        <div className={`avatar f-center relative mr-3 max-h-${size} min-w-${size} max-w-${size} overflow-hidden h-${size} rounded-full`}>
            {<img src={imageSrc} alt="avatar" className='h-full max-w-none' />}
        </div>
    );
}
export default Avatar; 