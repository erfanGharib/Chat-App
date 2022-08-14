import React from 'react';

const Avatar = props => {
    const {imageSrc, size} = props;
    console.log(imageSrc);
    return (
        <div className={`avatar bg-gradient-to-t relative mr-3 max-h-${size} min-w-${size} max-w-${size} overflow-hidden h-14 from-emerald-600 to-emerald-300 rounded-full`}>
            {imageSrc === undefined ? 
            <span className='w-full h-full text-xl -top-0.5 min-w-12 max-w-12 text-white f-center absolute'>e</span> : 
            <img src={imageSrc} alt="avatar" className='w-full h-full' />}
        </div>
    );
}
export default Avatar; 