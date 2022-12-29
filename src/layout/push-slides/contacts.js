import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/searchBox';
import SideBarHeader from '../../components/sideBarHeader';
import Users from '../../components/users';
import { hidePushSlide } from '../../store/reducers/_pushSlideData';

const Contacts = () => {
    const dispatch = useDispatch();
    
    return (
        <div id='contacts' className=''>
            <SideBarHeader 
                backBtnFunc={() => dispatch(hidePushSlide())}
                content={<SearchBox inputPlaceholder='Search contacts' />}
            />
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