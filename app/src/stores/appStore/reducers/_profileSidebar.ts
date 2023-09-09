import { createSlice } from '@reduxjs/toolkit';

export const $_profileSidebar = createSlice({
    name: '_profileSidebar',
    initialState: {
        status: false,
    },
    reducers: {
        showProfileSidebar: state => {
            state.status = !state.status;
        },
    }
});

export const { showProfileSidebar } = $_profileSidebar.actions;