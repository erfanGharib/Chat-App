import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPhone, faCircleInfo, faAt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ProfileInfoExtra from '../components/profile-sidebar/profileInfo-extra';
import ProfileSharedMedia from '../components/profile-sidebar/profileSharedMedia';
import ProfileInfo from '../components/profile-sidebar/profileInfo';
import { useDispatch, useSelector } from 'react-redux';
import { showProfileSidebar } from '@/stores/appStore/reducers/_profileSidebar';
import { T_AppStoreReducers } from '@/types/T_AppStoreReducers';

const ProfileSideBar = () => {
    const dispatch = useDispatch();
    const { status: PROFILE_DISPLAY_STATUS } = useSelector((state: T_AppStoreReducers) => state.$_profileSidebar);
    console.log(PROFILE_DISPLAY_STATUS);

    return (
        <div id='profileSidebar' className={`${PROFILE_DISPLAY_STATUS ? ' translate-x-0' : 'md:min-w-0 md:max-w-0 translate-x-full'} right-0 md:relative absolute top-0 z-30 transform sm:border-l side-bar dark:!bg-darkMode_darkC !bg-lightMode_lightC overflow-hidden`}>
            <div className='min-w-320 w-full'>
                <div className='w-full left-0'>
                    <div id='profileSidebar-header' className='side-bar-header bg-lightMode_lightC'>
                        <span onClick={() => dispatch(showProfileSidebar())} className='mx-2 default-btn'>
                            <FontAwesomeIcon icon={faXmark} size='lg' className='icon-c' />
                        </span>
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
        </div>
    );
}
export default ProfileSideBar;