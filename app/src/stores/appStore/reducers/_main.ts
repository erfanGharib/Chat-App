import { createSlice } from '@reduxjs/toolkit';

export const $_main = createSlice({
    name: '_main',
    initialState: {
        status: false,
    },
    reducers: {
        showMain: state => {
            state.status = true;
        },
        hideMain: state => {
            state.status = false;
        },
    }
});

export const { showMain, hideMain } = $_main.actions;