import { createSlice } from '@reduxjs/toolkit';

export const $_userMsg = createSlice({
    name: '_userChat',
    initialState: {
        data: []
    },
    reducers: {
        setUserMsg: (state, { payload }) => {
            const dataCp = [...state.data];
            dataCp.push(payload);

            state.data = dataCp;
        }
    }
});

export const { setUserMsg } = $_userMsg.actions;