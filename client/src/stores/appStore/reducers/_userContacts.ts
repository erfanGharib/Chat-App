import { createSlice } from '@reduxjs/toolkit';

const data = [
    {
        id: 0,
        userName: 'Erfan',
        seenTime: 'last seen recently'
    },
    {
        id: 1,
        userName: 'Ali',
        seenTime: 'last seen recently'
    },
]
export const $_userContacts = createSlice({
    name: '_userContacts',
    initialState: {
        data,
        firstState: data
    },
    reducers: {
        setUserContacts: (state, { payload }) => {
            state.data = payload;
        }
    }
});

export const { setUserContacts } = $_userContacts.actions;