import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ProfileSideBar = () => {
    const profileSideBarRef = React.createRef();
    const closeSideBar = () => {
        profileSideBarRef.current.classList.add('max-w-0');
    }
    return (
        <div ref={profileSideBarRef} id='profile-sidebar' className='transition-all duration-300 border-l side-bar overflow-hidden'>
            <div>
                <div id='profile-sidebar-header' className='side-bar-header'>
                    <button onClick={closeSideBar} className='py-3 px-4 mr-2 hover:bg-neutral-700 hover:bg-opacity-40 rounded-c'>
                        <FontAwesomeIcon icon={faXmark} size='lg' className='icon-c' />
                    </button>
                    <h1 className='text-xl text-neutral-200 mr-auto mb-1'>Profile</h1>
                </div>
            </div>
        </div>
    );
}
export default ProfileSideBar;