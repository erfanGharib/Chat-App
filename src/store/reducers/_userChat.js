import { createSlice } from '@reduxjs/toolkit';

export const $_userChat = createSlice({
    name: '_userChat',
    initialState: {
        status: false,
        data: [
            {
                id: 0,
                title: 'Navid',
                profileImg: 'https://img.freepik.com/free-photo/_23-2149945830.jpg?size=240&ext=jpg',
                IS_PRIVATE_CHAT: true,
                newMessagesNumber: 10,
                lastMessage: {
                    time: '03:20 PM',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
                }
            },
            {
                id: 1,
                title: 'Number 1 Models',
                profileImg: 'https://img.freepik.com/free-photo/_52683-102236.jpg?size=240&ext=jpg',
                IS_PRIVATE_CHAT: false,
                newMessagesNumber: 2,
                lastMessage: {
                    time: '03:20 PM',
                    sender: 'erfan',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
                }
            },
            {
                id: 2,
                title: 'Ali',
                profileImg: 'https://img.freepik.com/free-photo/_23-2149079751.jpg?size=240&ext=jpg',
                IS_PRIVATE_CHAT: true,
                newMessagesNumber: 14,
                lastMessage: {
                    time: '03:20 PM',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
                }
            },
        ]
    },
    reducers: {
        showUserChat: (state, { payload }) => {
            state.data = payload;
            state.status = true;
        },
        hideUserChat: state => {
            state.status = false;
        },
    }
});

export const { showUserChat, hideUserChat } = $_userChat.actions;