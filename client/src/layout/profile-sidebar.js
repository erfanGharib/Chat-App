import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPhone, faCircleInfo, faAt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ProfileInfoExtra from '../components/profile-sidebar/profileInfo-extra';
import ProfileSharedMedia from '../components/profile-sidebar/profileSharedMedia';
import ProfileInfo from '../components/profile-sidebar/profileInfo';

const ProfileSideBar = () => {
    const profileSideBarRef = React.createRef();
    const closeSideBar = () => {
        profileSideBarRef.current.classList.add('max-w-0');
    }
    return (
        <div ref={profileSideBarRef} id='profileSidebar' className='border-l side-bar dark:!bg-darkMode_darkC !bg-lightMode_darkC overflow-hidden'>
            <div className='min-w-320'>
                <div id='profileSidebar-header' className='side-bar-header bg-lightMode_lightC'>
                    <button onClick={closeSideBar} className='mr-2 default-btn'>
                        <FontAwesomeIcon icon={faXmark} size='lg' className='icon-c' />
                    </button>
                    <h1 className='text-xl text-darkMode_toLightC dark:text-lightMode_toDarkC mr-auto mb-1'>Profile</h1>
                </div>

                <div id='profile-info' className='bg-lightMode_lightC dark:bg-darkMode_lightC shadow-md'>
                    <ProfileInfo profileType seenTime='last seen recently' userName='Erfan' />
                    <ProfileInfoExtra 
                        data={[
                            {
                                ico: faPhone,
                                label: 'Phone',
                                value: '+98 939 820 3406',
                            },
                            {
                                ico: faCircleInfo,
                                label: 'Bio',
                                value: '17 yo, iran, shahrud',
                            },
                            {
                                ico: faAt,
                                label: 'Username',
                                value: 'erfan_web_dev',
                            },
                            {
                                ico: faBell,
                                label: '',
                                value: 'Notifications',
                            },
                        ]} 
                    />
                </div>
            </div>

            <ProfileSharedMedia 
                members={[
                    {
                        userName: 'Erfan',
                        seenTime: 'last seen recently'
                    },
                    {
                        userName: 'Ali',
                        seenTime: 'last seen recently'
                    },
                ]} 
            />
        </div>
    );
}
export default ProfileSideBar;