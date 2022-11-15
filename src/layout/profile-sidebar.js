import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPhone, faCircleInfo, faAt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ProfileInfoExtra from '../components/profile-sidebar/profileInfo-extra';
import ProfileSharedMedia from '../components/profile-sidebar/profileSharedMedia';
import ProfileInfo from '../components/profile-sidebar/profileInfo';
import { AppData } from '../pages/chatApp';

const ProfileSideBar = () => {
    const {PROFILE_DISPLAY_STATUS, set_PROFILE_DISPLAY_STATUS} = useContext(AppData);

    return (
        <div id='profileSidebar' className={`${PROFILE_DISPLAY_STATUS ? '' : 'max-w-0'} border-l side-bar dark:!bg-darkMode_darkC !bg-lightMode_lightC overflow-hidden`}>
            <div className='min-w-320'>
                <div id='profileSidebar-header' className='side-bar-header bg-lightMode_lightC'>
                    <button onClick={() => set_PROFILE_DISPLAY_STATUS(false)} className='mr-2 default-btn'>
                        <FontAwesomeIcon icon={faXmark} size='lg' className='icon-c' />
                    </button>
                    <h1 className='text-xl text-darkMode_toLightC dark:text-lightMode_toDarkC mr-auto mb-1'>Profile</h1>
                </div>

                <div id='profile-info' className='sidebar-section pb-2'>
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