import { createSlice } from '@reduxjs/toolkit';

export const $_pushSlideData = createSlice({
    name: 'pushSlide',
    initialState: {
        translate: 'translate-x-full',
        status: false
    },
    reducers: {
        showPushSlide: (state, { payload }) => {
            state.translate = 'translate-x-0';
            state.status = payload;
        },
        hidePushSlide: state => {
            state.translate = 'translate-x-full';
        }
    }
});

export const { showPushSlide, hidePushSlide } = $_pushSlideData.actions;