import MessageBox from './message-box';
import MessageListItem from './message-list';
// import { AppData } from '../../pages/app';

const ChatSection = () => {
    // const { setContentLoaded } = useContext(AppData);

    return (
        <section className='flex flex-col dark:bg-darkThemePattern bg-lightThemePattern w-full h-full' style={{height:'calc(100% - 4rem)'}}>
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
            <MessageBox socket={{}} />
        </section>
    );
}
export default ChatSection;