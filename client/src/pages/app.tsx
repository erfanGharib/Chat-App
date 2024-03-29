import { Provider } from 'react-redux';
import Main from '../components/layout/main';
import MainHead from '../components/mainHead';
import appStore from '../stores/appStore';

const ChatApp = () => {
    return (
        <>
            <MainHead />

            <Provider store={appStore}>
                <div className='flex w-full h-full'>
                    {/* <ReportBugModal /> */}
                    {/* <ChatSideBar /> */}
                    <Main />
                    {/* <ProfileSideBar /> */}
                </div>
            </Provider>
        </>
    );
}

export default ChatApp;