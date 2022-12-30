import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/searchBox';
import SideBarHeader from '../../components/sideBarHeader';
import Users from '../../components/users';
import { hidePushSlide } from '../../store/reducers/_pushSlideData';
import { setUserContacts } from '../../store/reducers/_userContacts';

const Contacts = () => {
    const { data, firstState } = useSelector(state => state.$_userContacts);
    const dispatch = useDispatch();

    return (
        <div id='contacts' className=''>
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