import MainHeader from '../components/main/mainHeader';
import MessageListItem from '../components/main/message-list-item';
import MessageBox from '../components/main/message-box';
import { useSelector } from 'react-redux';

const Main = () => {
    const { status: IS_CHATBOX_DISPLAYED } = useSelector(state => state.$_main);

    return (
        <main 
            className={`${IS_CHATBOX_DISPLAYED ? 'translate-x-0' : 'translate-x-full'} z-30 sm:relative transition-transform absolute top-0 transform sm:transform-none duration-300 flex flex-col dark:bg-darkThemePattern bg-lightThemePattern w-full sm:min-w-max h-full min-w-0 overflow-hidden dark:bg-darkMode_lightC bg-lightMode_toLightC`}
        >
            <MainHeader />
            <MessageListItem
                data={[
                    {
                        userName: 'ERFAN',
                        messageText: "hello there! i'm erfan",
                        messageMeta: '16:40 pm',
                        chatType: 2,
                    },
                    {
                        userName: 'ERFAN',
                        messageText: "hello there! i'm erfan",
                        messageMeta: '16:40 pm',
                        chatType: 1,
                    },
                    {
                        userName: 'ERFAN',
                        messageText: "hello there! i'm erfan",
                        messageMeta: '16:40 pm',
                        chatType: 0,
                    },

                ]}
            />
            <MessageBox />
        </main>
    );
}
export default Main;