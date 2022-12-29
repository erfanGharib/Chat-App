import { createSlice } from '@reduxjs/toolkit';

export const $_profileSidebar = createSlice({
    name: '_profileSidebar',
    initialState: {
        status: false,
        data: ''
    },
    reducers: {
        showProfileSidebar: (state, { payload }) => {
            state.status = true;
            state.data = payload;
        },
        hideProfileSidebar: state => {
            state.status = false;
        },
    }
});

export const { showProfileSidebar, hideProfileSidebar } = $_profileSidebar.actions;