import React, { useContext } from 'react';
import MessageListItem from './message-list-item';
import MessageBox from './message-box';
import { AppData } from '../../pages/chatApp';

const ChatSection = () => {
    const { setContentLoaded } = useContext(AppData);
    return (
        <section onLoad={() => setContentLoaded(true)} className='flex flex-col dark:bg-darkThemePattern bg-lightThemePattern w-full h-full' style={{height:'calc(100% - 4rem)'}}>
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
        </section>
    );
}
export default ChatSection;