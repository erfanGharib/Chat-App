import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ProfileSideBar = () => {
    const profileSideBarRef = React.createRef();
    const closeSideBar = () => {
        profileSideBarRef.current.classList.add('max-w-0');
    }
    return (
        <div ref={profileSideBarRef} id='profile-sidebar' className='transition-transform duration-300 border-l side-bar overflow-hidden'>
            <div>
                <div id='profile-sidebar-header' className='side-bar-header'>
                    <button onClick={closeSideBar} className='mr-2 default-btn'>
                        <FontAwesomeIcon icon={faXmark} size='lg' className='icon-c' />
                    </button>
                    <h1 className='text-xl text-darkMode_toLightC dark:text-neutral-200 mr-auto mb-1'>Profile</h1>
                </div>
            </div>
        </div>
    );
}
export default ProfileSideBar;