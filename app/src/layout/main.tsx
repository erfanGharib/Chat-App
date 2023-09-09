import MainHeader from '../components/main/mainHeader';
import MessageList from '../components/main/message-list';
import MessageBox from '../components/main/message-box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { setUserMsg } from '@/stores/appStore/reducers/_userMsg';
import { T_AppStoreReducers } from '@/types/T_AppStoreReducers';

const Main = () => {
    const { status: IS_CHATBOX_DISPLAYED } = useSelector((state: T_AppStoreReducers) => state.$_main);
    const { data: msg } = useSelector((state: T_AppStoreReducers) => state.$_userMsg);
    const socket = io();
    // const dispatch = useDispatch();

    useEffect(() => {
        initialSocket();
    }, []);

    const initialSocket = () => {
        // axios.get('/api/socket');

        // socket.current = ;
        socket.on('newIncomingMsg', newmsg => {
            // set message when message come
            // let msgCp = [...msg];
            // msgCp.push({ 
            //     userName: newmsg.userName, 
            //     messageText: newmsg.messageText,
            //     messageMeta: '',
            //     chatType: 2,
            // });
            console.log(msg);

            // dispatch(setUserMsg(msgCp));
        })
    }

    return (
        <main
            className={`${IS_CHATBOX_DISPLAYED ? 'translate-x-0' : 'translate-x-full'} dark:bg-[url('../darkModeBg.jpg')] bg-[url('../lightModeBg.jpg')] z-30 sm:relative transition-transform absolute top-0 transform sm:transform-none duration-300 flex flex-col w-full sm:min-w-max h-full min-w-0 overflow-hidden dark:bg-darkMode_lightC bg-lightMode_toLightC`}
        >
            <MainHeader />
            <MessageList
                // data={[
                //     {
                //         userName: 'ERFAN',
                //         messageText: "hello there! i'm erfan",
                //         messageMeta: '16:40 pm',
                //         chatType: 2,
                //     },
                //     {
                //         userName: 'ERFAN',
                //         messageText: "hello there! i'm erfan",
                //         messageMeta: '16:40 pm',
                //         chatType: 1,
                //     },
                //     {
                //         userName: 'ERFAN',
                //         messageText: "hello there! i'm erfan",
                //         messageMeta: '16:40 pm',
                //         chatType: 0,
                //     },

                // ]}
                data={msg}
            />
            <MessageBox socket={socket} />
        </main>
    );
}
export default Main;