import { createSlice } from '@reduxjs/toolkit';

export const $_errMsg = createSlice({
    name: '_errMsg',
    initialState: {
        emailErr: '',
        nameErr: '',
        codeErr: ''
    },
    reducers: {
        setErrMsg: (state, { payload }) => {
            console.log(payload);
            state[payload[0]] = payload[1];
        },
    }
});

export const { setErrMsg } = $_errMsg.actions;