import { createSlice } from '@reduxjs/toolkit';

export const $_form = createSlice({
    name: '_form',
    initialState: {
        IS_EMAIL_FORM: true,
    },
    reducers: {
        setForm: state => {
            state.IS_EMAIL_FORM = !state.IS_EMAIL_FORM;
        },
    }
});

export const { setForm } = $_form.actions;