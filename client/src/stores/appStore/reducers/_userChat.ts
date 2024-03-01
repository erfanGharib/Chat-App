import { T_UserChat } from '@/types/T_UserChat';
import { createSlice } from '@reduxjs/toolkit';
// https://img.freepik.com/free-photo/_23-2149945830.jpg?size=240&ext=jpg
// https://img.freepik.com/free-photo/_52683-102236.jpg?size=240&ext=jpg
// https://img.freepik.com/free-photo/_23-2149079751.jpg?size=240&ext=jpg

const data: Array<T_UserChat> = [
    {
        id: 0,
        title: 'Navid',
        profileImg: undefined,
        IS_PRIVATE_CHAT: true,
        newMessagesNumber: 10,
        lastMessage: {
            time: {
                hour: 3,
                minute: 20,
                isPM: true
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
        }
    },
    {
        id: 1,
        title: 'Number 1 Models',
        profileImg: undefined,
        IS_PRIVATE_CHAT: false,
        newMessagesNumber: 2,
        lastMessage: {
            time: {
                hour: 3,
                minute: 20,
                isPM: true
            },
            sender: 'erfan',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
        }
    },
    {
        id: 2,
        title: 'Ali',
        profileImg: undefined,
        IS_PRIVATE_CHAT: true,
        newMessagesNumber: 14,
        lastMessage: {
            time: {
                hour: 3,
                minute: 20,
                isPM: true
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, molestias assumenda et enim animi numquam odio vero ea est recusandae quisquam minima sunt reprehenderit mollitia, laudantium voluptate nihil, non quae.'
        }
    },
]
export const $_userChat = createSlice({
    name: '_userChat',
    initialState: {
        data,
        firstState: data
    },
    reducers: {
        setUserChat: (state, { payload }) => {
            state.data = payload;
        }
    }
});

export const { setUserChat } = $_userChat.actions;