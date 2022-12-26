import React, { useContext } from 'react';
import { AppData } from '../pages/chatApp';
import MainHeader from '../components/main/mainHeader';
import MessageListItem from '../components/main/message-list-item';
import MessageBox from '../components/main/message-box';

const Main = () => {
    const { currentChat, /*setContentLoaded*/ } = useContext(AppData);

    return (
        <main 
            // onLoad={() => setContentLoaded(true)} 
            className={`${currentChat.translate} sm:relative absolute top-0 transform md:transform-none  duration-300 flex flex-col dark:bg-darkThemePattern bg-lightThemePattern w-full sm:min-w-max h-full min-w-0 overflow-hidden dark:bg-darkMode_lightC bg-lightMode_toLightC`}
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