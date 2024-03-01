import { createSlice } from '@reduxjs/toolkit';

export const $_theme = createSlice({
    name: 'theme',
    initialState: {
        IS_DARK_MODE: false
    },
    reducers: {
        changeTheme: state => {
            state.IS_DARK_MODE = !state.IS_DARK_MODE;
        }
    }
});

export const { changeTheme } = $_theme.actions;