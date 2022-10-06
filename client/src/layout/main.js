import React, { useContext } from 'react';
import MessageListItem from '../components/main/message-list-item';
import MessageBox from '../components/main/message-box';
import { AppData } from '../App';
import MainHeader from '../components/main/mainHeader';

const Main = () => {
    const {setContentLoaded} = useContext(AppData);
    
    return (
        <main onLoad={() => setContentLoaded(true)} id='chat-part' className='dark:bg-darkThemePattern bg-lightThemePattern sm:min-w-max min-w-0 w-0 overflow-hidden sm:w-full dark:bg-darkMode_lightC bg-lightMode_toLightC'>
            <MainHeader />
            <div id='message-list' className='w-full h-full max-w-xl mx-auto px-4'>
                <MessageListItem 
                    data = {[
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
            </div>
        </main>
    );
}
export default Main;