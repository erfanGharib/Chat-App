import SearchBox from '@/components/searchBox';
import SideBarHeader from '@/components/sideBarHeader';
import Users from '@/components/users';
import { useDispatch, useSelector } from 'react-redux';
import { hidePushSlide } from '../../stores/appStore/reducers/_pushSlideData';
import { setUserContacts } from '../../stores/appStore/reducers/_userContacts';

const Contacts = () => {
    const { data, firstState } = useSelector((state: any) => state.$_userContacts);
    const dispatch = useDispatch();

    return (
        <div id='contacts'>
            <SideBarHeader
                backBtnFunc={() => dispatch(hidePushSlide())}
                content={
                    <SearchBox
                        inputPlaceholder='Search contacts'
                        setData={setUserContacts}
                        firstState={firstState}
                    />
                }
            />
            <Users members={data} />
        </div>
    );
}
export default Contacts;