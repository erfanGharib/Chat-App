import { configureStore } from '@reduxjs/toolkit';
import { $_pushSlideData } from './reducers/_pushSlideData';
import { $_userChat } from './reducers/_userChat';
import { $_profileSidebar } from './reducers/_profileSidebar';
import { $_reportBugModal } from './reducers/_reportBugModal';
import { $_theme } from './reducers/_theme';
import { $_main } from './reducers/_main';
import { $_userContacts } from './reducers/_userContacts';
import { $_userMsg } from './reducers/_userMsg';

const appStore = configureStore({
    reducer: {
        $_main: $_main.reducer,
        $_userChat: $_userChat.reducer,
        $_userContacts: $_userContacts.reducer,
        $_pushSlideData: $_pushSlideData.reducer,
        $_profileSidebar: $_profileSidebar.reducer,
        $_reportBugModal: $_reportBugModal.reducer,
        $_theme: $_theme.reducer,
        $_userMsg: $_userMsg.reducer
    },
});
export default appStore;