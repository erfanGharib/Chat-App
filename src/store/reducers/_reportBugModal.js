import { createSlice } from '@reduxjs/toolkit';

export const $_reportBugModal = createSlice({
    name: '_reportBugModal',
    initialState: {
        status: false
    },
    reducers: {
        showModal: state => { state.status = true },
        hideModal: state => { state.status = false },
    }
});

export const { showModal, hideModal } = $_reportBugModal.actions;