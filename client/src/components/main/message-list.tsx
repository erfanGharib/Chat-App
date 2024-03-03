import { T_UserMsg } from '../../../../shared/types/socket/T_UserMsg';
import Avatar from '../avatar';

const MessageList = ({ data }: { data: Array<T_UserMsg> }) => {
    // const {userName, messageText, messageMeta, chatType} = props;

    /**
        @chatType define where's message located in
        The goal is load data related to @MessageListItem 

        @Types
        Group Chat = 2
        Private Chat = 1 
        Private Chat - client = 0 
    */

    return (
        <div id='message-list' className='w-full h-full overflow-y-auto max-w-xl mx-auto px-4'>
            <div id='massage-list' className='w-full flex flex-col py-2 justify-end'>
                {
                    data.map(({ userName, messageText, messageMeta, chatType }, i) => {
                        const className_ = chatType === 0 ?
                            '!rounded-br-none dark:bg-sky-600 bg-sky-800 text-lightMode_toLightC' :
                            '!rounded-bl-none dark:bg-darkMode_lightC bg-lightMode_toLightC';

                        return (
                            <div key={`message ${i}`} className={`flex w-full h-auto items-end my-1 drop-shadow-lg ${chatType === 0 ? 'justify-end' : ''}`}>
                                {chatType === 2 && <Avatar size={'35px'} />}
                                <div className={`rounded-c min-w-[70px] max-w-64 ml-2 py-1 px-2 relative ${className_}`}>
                                    {chatType === 2 && <h4 className="opacity-50 text-xs">{userName}</h4>}

                                    <div className='flex flex-wrap items-end w-full'>
                                        <p className="text-sm w-full break-words">{messageText}</p>
                                        <div className='flex ml-auto pl-1 justify-end opacity-50 text-[11px]'>
                                            <span>{messageMeta}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default MessageList;