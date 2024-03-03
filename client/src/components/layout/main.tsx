import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { T_SocketEventMap } from '../../../../shared/types/socket/T_SocketEventMap';
import MainHeader from '../main/mainHeader';
import MessageBox from '../main/message-box';
import MessageList from '../main/message-list';
import { setUserMsg } from '../../stores/appStore/reducers/_userMsg';
import { T_AppStoreReducers } from '../../types/T_AppStoreReducers';
import { T_UserChat } from '../../types/T_UserChat';
import { getSocket } from '../../utils/getSocket';

let runned = false;
const Main = () => {
    const { status: IS_CHATBOX_DISPLAYED } = useSelector((state: T_AppStoreReducers) => state.$_main);
    const { data: msg } = useSelector((state: T_AppStoreReducers) => state.$_userMsg);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(runned) return;
        console.log('sdfsdf');
        
        getSocket().on('connect', () => {
          console.log('Connected to WebSocket');
        });
        
        getSocket().on('newMessage', newmsg => {
            console.log('on chat message');
            
            dispatch(setUserMsg(newmsg));
        })

        runned = true
    }, [])

    return (
        <main
            className={`${/*IS_CHATBOX_DISPLAYED ? 'translate-x-0' : 'translate-x-full'*/''} dark:bg-[url('../darkModeBg.jpg')] bg-[url('../lightModeBg.jpg')] z-30 sm:relative transition-transform absolute top-0 transform sm:transform-none duration-300 flex flex-col w-full sm: min-w-max h-full /min-w-0/ overflow-hidden dark:bg-darkMode_lightC bg-lightMode_toLightC`}
        >
            <MainHeader />
            <MessageList data={msg} />
            <MessageBox />
        </main>
    );
}
export default Main;