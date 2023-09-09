import { createSlice } from '@reduxjs/toolkit';

export const $_userEmail = createSlice({
    name: '_userEmail',
    initialState: {
        email: '',
    },
    reducers: {
        setUserEmail: (state, { payload }) => {
            state.email = payload;
        },
    }
});

export const { setUserEmail } = $_userEmail.actions;