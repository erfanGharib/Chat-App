import React, { useContext } from 'react';
import SearchBox from '../../components/searchBox';
import SideBarHeader from '../../components/sideBarHeader';
import Users from '../../components/users';
import { AppData } from '../../pages/chatApp';

const Contacts = () => {
    const { setPushSlideData, userData } = useContext(AppData);
    
    return (
        <div id='contacts' className=''>
            {/* <SideBarHeader 
                backBtnFunc={() => setPushSlideData({ translate: '-translate-x-0' })}
                content={<SearchBox data={userData.contacts} inputPlaceholder='Search contacts' />}
            /> */}
            <Users
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
export default Contacts;