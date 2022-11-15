import React from 'react';
import ProfileInfoExtra from '../../components/profile-sidebar/profileInfo-extra';
import ProfileInfo from '../../components/profile-sidebar/profileInfo';
import { faAt, faCircleInfo, faPhone, faGear, faBell, faLanguage } from '@fortawesome/free-solid-svg-icons';

const Setting = () => {
    return (
        <div id='setting' className='w-full h-full dark:!bg-darkMode_darkC !bg-lightMode_lightC'>
            <div className='sidebar-section pb-3 mb-2.5'>
                <ProfileInfo profileType seenTime='last seen recently' userName='Erfan' />
                <ProfileInfoExtra
                    data={[
                        {
                            ico: faPhone,
                            label: 'Phone',
                            value: '+98 939 820 3406',
                        },
                        {
                            ico: faAt,
                            label: 'Username',
                            value: 'erfan_web_dev',
                        },
                        {
                            ico: faCircleInfo,
                            label: 'Bio',
                            value: '17 yo, iran, shahrud',
                        },
                    ]}
                />
            </div>
            <div className='sidebar-section py-3'>
                <ProfileInfoExtra
                    data={[
                        {
                            ico: faGear,
                            label: 'Phone',
                            value: '+98 939 820 3406',
                        },
                        {
                            ico: faAt,
                            label: 'Username',
                            value: 'erfan_web_dev',
                        },
                        {
                            ico: faCircleInfo,
                            label: 'Bio',
                            value: '17 yo, iran, shahrud',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
export default Setting;