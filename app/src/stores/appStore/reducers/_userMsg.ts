import { createSlice } from '@reduxjs/toolkit';

// let data = []
export const $_userMsg = createSlice({
    name: '_userChat',
    initialState: {
        data: []
        // firstState: data
    },
    reducers: {
        setUserMsg: (state, { payload }) => {
            // data = payload;
            state.data = payload;
        }
    }
});

export const { setUserMsg } = $_userMsg.actions;